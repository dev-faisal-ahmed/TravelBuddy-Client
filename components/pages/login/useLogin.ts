import { loginAction } from './loginAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const loginFormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Provide an valid Email' }),

  password: z
    .string({ required_error: 'Password is required' })
    .min(4, { message: 'Min Length is 4' }),
});

export type TLoginFormFields = z.infer<typeof loginFormSchema>;

export const useLogin = () => {
  const form = useForm<TLoginFormFields>({
    resolver: zodResolver(loginFormSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onLogin = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Logging in....!');
    try {
      setLoading(true);
      const response = await loginAction(data);
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message);
      router.back();
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong');
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  });

  return { form, onLogin, loading };
};
