'use client';

import { Container } from '@/components/shared/Container';
import { useChangePassword } from './useChangePassword';
import { PasswordInput } from '@/components/shared/form/PasswordInput';
import { Button } from '@/components/ui/button';

export const ChangePassword = () => {
  const { form, loading, onPasswordChange } = useChangePassword();

  const {
    formState: { errors },
  } = form;

  return (
    <Container className='max-w-screen-md py-12'>
      <form className='rounded-md border p-6' onSubmit={onPasswordChange}>
        <h3 className='mb-6 font-semibold text-primary'>Change Password</h3>
        <div className='grid gap-6 sm:grid-cols-2'>
          <PasswordInput
            containerClass='sm:col-span-2'
            {...form.register('oldPassword')}
            error={errors.oldPassword?.message}
            placeholder='Current Password'
          />

          <PasswordInput
            {...form.register('newPassword')}
            error={errors.newPassword?.message}
            placeholder='New Password'
          />

          <PasswordInput
            {...form.register('confirmPassword')}
            error={errors.confirmPassword?.message}
            placeholder='Confirm Password'
          />
        </div>

        <Button disabled={loading} className='ml-auto mt-6 block'>
          Change Password
        </Button>
      </form>
    </Container>
  );
};
