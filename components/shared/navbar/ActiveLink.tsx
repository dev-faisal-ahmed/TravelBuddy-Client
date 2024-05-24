'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type TProps = {
  title: string;
  url: string;
  className?: string;
};

export const ActiveLink = ({ title, url, className }: TProps) => {
  const pathName = usePathname();

  return (
    <Link
      className={cn(
        'rounded-sm px-5 py-2 text-sm font-semibold text-neutral-500',
        pathName === url && 'bg-primary-50 text-primary-500',
        className,
      )}
      href={url}
    >
      {title}
    </Link>
  );
};
