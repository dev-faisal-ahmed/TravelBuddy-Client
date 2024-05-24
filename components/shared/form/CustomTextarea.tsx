import React from 'react';
import { Textarea } from '@/components/ui/textarea';

type TProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
  label?: string;
};

export const CustomTextArea = React.forwardRef<HTMLTextAreaElement, TProps>(
  ({ error, label, ...props }, ref) => {
    return (
      <div>
        <Textarea ref={ref} {...props} label={label} />
        {error && (
          <div className='mx-1 mt-1 rounded bg-error-50 p-1 text-xs text-error-500'>
            {error}
          </div>
        )}
      </div>
    );
  },
);

CustomTextArea.displayName = 'Textarea';
