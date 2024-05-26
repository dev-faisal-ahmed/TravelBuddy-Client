import { EditProfile } from '@/components/shared/profile-layout/edit-profile';
import { ProfileLink } from '@/components/shared/profile-layout/ProfileLink';
import { Container } from '@/components/shared/Container';
import { profileLinks } from '@/lib/data/links';
import { redirect } from 'next/navigation';
import { TLoggedUser } from '@/lib/types';
import { PropsWithChildren } from 'react';
import { cookies } from 'next/headers';
import { jwtDecode } from 'jwt-decode';
import Image from 'next/image';

export default function ProfileLayout({ children }: PropsWithChildren) {
  const token = cookies().get('token')?.value;

  if (!token) redirect('/login');
  const user = jwtDecode(token) as TLoggedUser;

  return (
    <>
      <section className='bg-neutral-50 shadow-md'>
        <Container>
          <Image
            className='h-[250px] w-full rounded-b-md md:h-[400px]'
            src={'/images/auth-banner.png'}
            height={500}
            width={500}
            alt='banner'
          />
          <div className='-mt-12 flex flex-col md:ml-12 md:flex-row md:gap-6'>
            <div className='mx-auto flex size-36 items-center justify-center rounded-full border-[6px] border-neutral-300 bg-primary text-5xl font-semibold text-white md:mx-0'>
              {user.name[0]}
            </div>
            <div className='mx-auto mt-auto py-3 text-center md:mx-0 md:text-left'>
              <h3 className='text-2xl font-semibold'>{user.name}</h3>
              <p className='text-neutral-600'>{user.email}</p>
            </div>
            <div className='mx-auto ml-auto mt-auto py-3 md:mr-0'>
              <EditProfile user={user} />
            </div>
          </div>
          <div className='mt-4 flex items-center gap-4 border-t border-neutral-300 pt-3'>
            {profileLinks.map((link) => (
              <ProfileLink key={link.url} {...link} />
            ))}
          </div>
        </Container>
      </section>
      <main>{children}</main>
    </>
  );
}
