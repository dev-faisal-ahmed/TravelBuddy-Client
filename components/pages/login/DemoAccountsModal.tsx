'use client';

import * as Dialog from '@/components/ui/dialog';
import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type TProps = {
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
};

export const DemoAccountModal = ({
  onEmailChange,
  onPasswordChange,
}: TProps) => {
  const [selected, setSelected] = useState<'ADMIN' | 'USER' | undefined>();

  const onAdminSelection = () => {
    setSelected('ADMIN');
    onEmailChange('admin@travel.buddy.com');
    onPasswordChange('1234');
  };

  const onUserSelection = () => {
    setSelected('USER');
    onEmailChange('faisal@gmail.com');
    onPasswordChange('1234');
  };

  return (
    <Dialog.Dialog>
      <Dialog.DialogTrigger className='text-sm text-primary-600 underline'>
        Use Demo Account
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className='w-[300px]'>
        <Dialog.DialogHeader className='px-2 font-semibold'>
          Choose Any Account!
        </Dialog.DialogHeader>
        <div className='flex flex-col gap-2'>
          <h4
            onClick={onUserSelection}
            className={cn(
              'flex cursor-pointer items-center justify-between rounded px-3 py-1 hover:bg-primary hover:text-white',
              selected === 'USER' && 'bg-primary text-white',
            )}
          >
            <span>User</span>
            {selected === 'USER' && <FaCheck />}
          </h4>

          <h4
            onClick={onAdminSelection}
            className={cn(
              'flex cursor-pointer items-center justify-between rounded px-3 py-1 hover:bg-primary hover:text-white',
              selected === 'ADMIN' && 'bg-primary text-white',
            )}
          >
            <span>ADMIN</span>
            {selected === 'ADMIN' && <FaCheck />}
          </h4>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
