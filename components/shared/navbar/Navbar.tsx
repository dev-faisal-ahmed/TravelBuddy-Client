import Link from 'next/link';
import { cookies } from 'next/headers';
import { Container } from '../Container';
import { Logo } from '../Logo';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { ActiveLink } from './ActiveLink';
import { navLinks } from '@/lib/data/navLinks';
import { Button } from '@/components/ui/button';
import { ProfileIcon } from '../profile-icon/ProfileIcon';
import { TLoggedUser } from '@/lib/types/dataType';

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
    <nav className='bg-white shadow'>
      <Container className='flex items-center gap-6 py-3'>
        <Logo />
        <div className='ml-auto flex items-center gap-3'>
          {navLinks.map((link) => (
            <ActiveLink key={link.url} {...link} />
          ))}
        </div>
        {user ? (
          <ProfileIcon name={user.name} email={user.email} />
        ) : (
          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
        )}
      </Container>
    </nav>
  );
};
