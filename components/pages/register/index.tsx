import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { RegisterForm } from './RegisterForm';

export const Register = () => {
  return (
    <Container className='flex min-h-screen items-center justify-center'>
      <main className='flex justify-center overflow-hidden rounded-2xl bg-white'>
        <div className='w-full'>
          <Image
            className='h-full w-full'
            src={'/images/auth-banner.png'}
            height={500}
            width={500}
            alt='banner'
          />
        </div>
        <div className='w-full p-6'>
          <Logo />
          <h2 className='mt-4 text-xl font-semibold'>
            Register to Travel Buddy
          </h2>
          <RegisterForm />
        </div>
      </main>
    </Container>
  );
};
