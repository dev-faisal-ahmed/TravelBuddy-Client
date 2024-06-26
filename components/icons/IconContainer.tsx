import { PropsWithChildren } from 'react';

type TProps = PropsWithChildren & {
  size?: number;
};

export const IconContainer = ({ children, size = 24 }: TProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {children}
    </svg>
  );
};
