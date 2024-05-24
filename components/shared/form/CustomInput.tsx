import React from 'react';
import { Input } from '@/components/ui/input';

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const CustomInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <Input type={props.type} ref={ref} {...props} />
        {error && (
          <div className='rounded bg-error-50 p-1 text-xs text-error-500'>
            {error}
          </div>
        )}
      </>
    );
  },
);

CustomInput.displayName = 'Input';
