import React from 'react';
import { Input } from '@/components/ui/input';

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  label?: string;
  containerClassName?: string;
};

export const CustomInput = React.forwardRef<HTMLInputElement, TProps>(
  ({ error, label, containerClassName, ...props }, ref) => {
    return (
      <div className={containerClassName}>
        <Input
          type={props.type}
          ref={ref}
          {...props}
          label={label}
          containerClassName={containerClassName}
        />
        {error && (
          <div className='mx-1 mt-2 rounded bg-error-50 p-1 text-xs text-error-500'>
            {error}
          </div>
        )}
      </div>
    );
  },
);

CustomInput.displayName = 'Input';
