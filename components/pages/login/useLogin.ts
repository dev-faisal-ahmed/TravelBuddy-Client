import { loginAction } from './loginAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const form = useForm<TLoginFormFields>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email, password },
  });

  const router = useRouter();

  // side effect
  useEffect(() => {
    form.setValue('email', email || '');
    form.setValue('password', password || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  // handlers
  const onEmailChange = (value: string) => setEmail(value);
  const onPasswordChange = (value: string) => setPassword(value);

  const onLogin = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Logging in....!');
    try {
      setLoading(true);
      const response = await loginAction(data);
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message);
      router.push('/');
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong');
    } finally {
      setLoading(false);
      toast.dismiss(toastId);
    }
  });

  return {
    states: { email, password, loading },
    handlers: { onLogin, onEmailChange, onPasswordChange },
    form,
  };
};
