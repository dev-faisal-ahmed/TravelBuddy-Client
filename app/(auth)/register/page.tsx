import { Register } from '@/components/pages/register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Travel Buddy | Register',
};

export default function RegisterPage() {
  return <Register />;
}
