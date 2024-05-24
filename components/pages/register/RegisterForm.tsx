'use client';

import { useRegister } from './useRegister';
import { PasswordInput } from '@/components/shared/form/PasswordInput';
import { Button } from '@/components/ui/button';
import { CustomInput } from '@/components/shared/form/CustomInput';

export const RegisterForm = () => {
  const { form, onRegister, loading } = useRegister();

  const {
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onRegister} className='mt-10 flex flex-col gap-4'>
      <CustomInput
        error={errors.name?.message}
        placeholder='Name'
        {...form.register('name')}
      />

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

      <PasswordInput
        error={errors.confirmPassword?.message}
        placeholder='Confirm Password'
        {...form.register('confirmPassword')}
      />
      <Button disabled={loading} className='mt-6'>
        Register
      </Button>
    </form>
  );
};
