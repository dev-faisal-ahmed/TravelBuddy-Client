'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TProps = {
  title: string;
  url: string;
};

export const ProfileLink = ({ title, url }: TProps) => {
  const pathName = usePathname();
  return (
    <Link
      className={cn(
        'px-3 py-2',
        pathName === url && 'border-b-2 font-semibold text-primary',
      )}
      href={url}
    >
      {title}
    </Link>
  );
};
