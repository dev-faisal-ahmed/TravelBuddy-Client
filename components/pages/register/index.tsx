import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { RegisterForm } from './RegisterForm';
import Link from 'next/link';

export const Register = () => {
  return (
    <Container className='flex min-h-screen items-center justify-center'>
      <main className='flex justify-center overflow-hidden rounded-2xl bg-transparent md:bg-white'>
        <div className='hidden w-full md:block'>
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
          <h2 className='mt-6 text-xl font-semibold'>
            Register to Travel Buddy
          </h2>
          <p className='mt-1 text-sm'>
            Already have an account?{' '}
            <Link className='text-blue-500 underline' href={'/login'}>
              Login
            </Link>
          </p>
          <RegisterForm />
        </div>
      </main>
    </Container>
  );
};
