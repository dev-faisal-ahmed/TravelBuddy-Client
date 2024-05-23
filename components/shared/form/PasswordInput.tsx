import React from 'react';
import { ClosedEyeIcon } from '@/components/icons/ClosedEyeIcon';
import { EyeIcon } from '@/components/icons/EyeIcons';
import { Input } from '@/components/ui/input';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    const [isShown, setIsShown] = React.useState(false);

    return (
      <>
        <div className='relative'>
          <Input type={isShown ? 'text' : 'password'} ref={ref} {...props} />
          <div
            onClick={() => setIsShown((prevState) => !prevState)}
            style={{ transform: 'translateY(-50%)' }}
            className='absolute right-2 top-1/2 cursor-pointer'
          >
            {isShown ? <ClosedEyeIcon size={16} /> : <EyeIcon size={16} />}
          </div>
        </div>
        {error && (
          <div className='text-error-500 bg-error-50 rounded p-1 text-xs'>
            {error}
          </div>
        )}
      </>
    );
  },
);

PasswordInput.displayName = 'Input';
