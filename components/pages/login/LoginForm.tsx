'use client';

import { PasswordInput } from '@/components/shared/form/PasswordInput';
import { Button } from '@/components/ui/button';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { useLogin } from './useLogin';

export const LoginForm = () => {
  const { form, onLogin } = useLogin();

  const {
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onLogin} className='mt-10 flex flex-col gap-4'>
      <CustomInput
        error={errors.email?.message}
        placeholder='Email'
        {...form.register('email')}
      />

      <PasswordInput
        error={errors.password?.message}
        placeholder='Password'
        {...form.register('password')}
      />

      <Button className='mt-6'>Login</Button>
    </form>
  );
};
