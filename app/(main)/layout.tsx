import { Navbar } from '@/components/shared/navbar/Navbar';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
