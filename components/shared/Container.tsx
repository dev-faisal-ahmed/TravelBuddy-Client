import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  className?: string;
};

export const Container = ({ children, className }: Props) => {
  return (
    <section className={cn('container px-5', className)}>{children}</section>
  );
};
