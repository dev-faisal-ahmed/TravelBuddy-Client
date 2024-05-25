import React from 'react';
import { ClosedEyeIcon } from '@/components/icons/ClosedEyeIcon';
import { EyeIcon } from '@/components/icons/EyeIcons';
import { Input } from '@/components/ui/input';

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const PasswordInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ error, ...props }, ref) => {
    const [isShown, setIsShown] = React.useState(false);

    return (
      <>
        <div className='relative'>
          <Input type={isShown ? 'text' : 'password'} ref={ref} {...props} />
          <div
            onClick={() => setIsShown((prevState) => !prevState)}
            style={{ transform: 'translateY(-30%)' }}
            className='absolute right-2 top-1/2 cursor-pointer'
          >
            {isShown ? <ClosedEyeIcon size={16} /> : <EyeIcon size={16} />}
          </div>
        </div>
        {error && (
          <div className='rounded bg-error-50 p-1 text-xs text-error-500'>
            {error}
          </div>
        )}
      </>
    );
  },
);

PasswordInput.displayName = 'Input';
