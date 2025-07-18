import Link from 'next/link';
import { cookies } from 'next/headers';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { ActiveLink } from './ActiveLink';
import { Button } from '@/components/ui/button';
import { ProfileIcon } from '../profile-icon/ProfileIcon';
import { MobileMenu } from './MobileMenu';
import { TLoggedUser } from '@/lib/types';
import { navLinks } from '@/lib/data/links';

const getUserInfo = () => {
  const token = cookies().get('token')?.value;
  if (!token) return null;

  const user = jwtDecode(token);
  if (!user) return null;

  return user as TLoggedUser & JwtPayload;
};

export const Navbar = () => {
  const user = getUserInfo();

  return (
    <nav className='sticky top-0 z-[9999] bg-white shadow-md'>
      <Container className='flex items-center gap-6 py-3'>
        <MobileMenu role={user?.role} />
        <Logo />
        <div className='ml-auto hidden items-center gap-3 lg:flex'>
          {navLinks.map((link) => (
            <ActiveLink key={link.url} {...link} />
          ))}

          {user?.role === 'ADMIN' && (
            <ActiveLink title='Dashboard' url={'/admin/trips'} />
          )}
        </div>

        <div className='ml-auto lg:ml-0'>
          {user ? (
            <ProfileIcon name={user.name} email={user.email} />
          ) : (
            <Link href={'/login'}>
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </Container>
    </nav>
  );
};
