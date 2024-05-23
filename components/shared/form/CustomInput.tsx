import React from 'react';
import { Input } from '@/components/ui/input';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

export const CustomInput = React.forwardRef<HTMLInputElement, Props>(
  ({ error, ...props }, ref) => {
    return (
      <>
        <Input type={props.type} ref={ref} {...props} />
        {error && (
          <div className='text-error-500 bg-error-50 rounded p-1 text-xs'>
            {error}
          </div>
        )}
      </>
    );
  },
);

CustomInput.displayName = 'Input';
