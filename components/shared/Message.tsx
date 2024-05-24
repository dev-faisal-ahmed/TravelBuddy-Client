import { cn } from '@/lib/utils';

type TProps = {
  className?: string;
  message: string;
};

export const Message = ({ className, message }: TProps) => {
  return (
    <p className={cn('mt-8 text-center text-sm font-semibold', className)}>
      {message}
    </p>
  );
};
