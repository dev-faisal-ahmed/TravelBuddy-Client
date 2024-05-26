import { changePasswordAction } from './changePasswordAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const changePasswordSchema = z
  .object({
    oldPassword: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Min Length is 4' }),

    newPassword: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Min Length is 4' }),

    confirmPassword: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Min Length is 4' }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TChangePasswordFields = z.infer<typeof changePasswordSchema>;
export const useChangePassword = () => {
  const [loading, setIsLoading] = useState(false);

  const form = useForm<TChangePasswordFields>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onPasswordChange = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Changing Password ...!');
    try {
      setIsLoading(true);
      if (data.oldPassword === data.newPassword)
        throw new Error('New password and current password can not be same');
      const response = await changePasswordAction(data);

      if (!response?.ok) throw new Error(response?.message);

      toast.success(response.message, { id: toastId });
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  });

  return { form, onPasswordChange, loading };
};
