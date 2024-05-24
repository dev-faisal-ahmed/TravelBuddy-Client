import { Login } from '@/components/pages/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Login',
};

export default function LoginPage() {
  return <Login />;
}
