'use client';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/Logo';
import { SidebarLink } from './SidebarLink';
import { sidebarLinks } from '@/lib/data/links';

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        'sticky left-0 top-0 flex h-screen min-w-[250px] flex-col bg-white p-6',
        className,
      )}
    >
      <Logo />
      <div className='mt-6 flex flex-col gap-2'>
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.url} {...link} />
        ))}
      </div>
    </aside>
  );
}
