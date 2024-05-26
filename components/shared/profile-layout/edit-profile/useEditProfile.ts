import { TLoggedUser } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { editProfileAction } from './editProfileAction';
import { z } from 'zod';

const editProfileSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(2, { message: 'Min Length is 2' }),

  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Provide an valid Email' }),
});

export type TEditProfileFields = z.infer<typeof editProfileSchema>;

export const useEditProfile = (user: TLoggedUser) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const form = useForm<TEditProfileFields>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onEditProfile = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Updating Profile');
    try {
      setIsLoading(true);
      const response = await editProfileAction(data);

      if (!response?.ok) throw new Error(response?.message);

      toast.success(response.message, { id: toastId });
      setIsOpenModal(false);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  });

  return { form, onEditProfile, isOpenModal, setIsOpenModal, loading };
};
