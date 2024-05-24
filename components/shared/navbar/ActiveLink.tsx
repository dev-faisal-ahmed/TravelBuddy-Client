'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type TProps = {
  title: string;
  url: string;
};

export const ActiveLink = ({ title, url }: TProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={cn(
        'rounded-md px-3 py-1 text-sm font-semibold text-neutral-500',
        pathName === url && 'bg-primary-50 text-primary-500',
      )}
      href={url}
    >
      {title}
    </Link>
  );
};
