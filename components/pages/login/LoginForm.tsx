'use client';

import { PasswordInput } from '@/components/shared/form/PasswordInput';
import { Button } from '@/components/ui/button';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { useLogin } from './useLogin';
import { DemoAccountModal } from './DemoAccountsModal';

export const LoginForm = () => {
  const { states, handlers, form } = useLogin();
  const { loading } = states;
  const { onLogin, onEmailChange, onPasswordChange } = handlers;
  const { formState } = form;
  const { errors } = formState;

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

      <DemoAccountModal
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
      />

      <Button disabled={loading} className='mt-3'>
        Login
      </Button>
    </form>
  );
};
