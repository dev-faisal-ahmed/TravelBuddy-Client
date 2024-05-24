import { loginAction } from './loginAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const form = useForm<TLoginFormFields>({
    resolver: zodResolver(loginFormSchema),
  });

  const onLogin = form.handleSubmit(async (data) => {
    try {
      const response = await loginAction(data);
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message);
      router.push('/');
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong');
    }
  });

  return { form, onLogin };
};
