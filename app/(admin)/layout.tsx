import { Sidebar } from '@/components/shared/admin-layout/sidebar/Sidebar';
import { Topbar } from '@/components/shared/admin-layout/topbar/Topbar';
import { TLoggedUser } from '@/lib/types';
import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default function AdminLayout({ children }: PropsWithChildren) {
  const token = cookies().get('token')?.value;
  if (!token) redirect('/login');

  const user = jwtDecode(token) as TLoggedUser;
  if (user.role !== 'ADMIN') redirect('/');

  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <div>
        <Sidebar className='hidden lg:flex' />
      </div>
      <section className='w-full overflow-hidden'>
        <Topbar user={user} />
        <main className='px-6'>{children}</main>
      </section>
    </main>
  );
}
