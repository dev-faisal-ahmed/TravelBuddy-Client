import { useRouter } from 'next/navigation';
import { registerAction } from './registerAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useState } from 'react';

const registerFormSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is required' })
      .min(2, { message: 'Min Length is 2' }),

    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Provide an valid Email' }),

    password: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Min Length is 4' }),

    confirmPassword: z
      .string({
        required_error: 'Confirm Password is required',
      })
      .min(4, { message: 'Min Length is 4' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type TRegisterFormFields = z.infer<typeof registerFormSchema>;

export const useRegister = () => {
  const form = useForm<TRegisterFormFields>({
    resolver: zodResolver(registerFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onRegister = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Creating a new account...!');
    try {
      setLoading(true);
      const response = await registerAction(data);
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message);
      router.push('/login');
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong');
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  });

  return { form, onRegister, loading };
};
