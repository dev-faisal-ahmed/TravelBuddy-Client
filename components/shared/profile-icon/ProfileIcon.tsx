'use client';

import * as Popover from '@/components/ui/popover';
import { Button } from '../../ui/button';
import { logoutAction } from './logoutAction';
import { toast } from 'sonner';

type TProps = {
  name: string;
  email: string;
  size?: number;
  fontSize?: number;
};

export const ProfileIcon = ({
  name,
  email,
  size = 40,
  fontSize = 24,
}: TProps) => {
  const onLogout = () => {
    logoutAction();
    toast.success('You are logged out!!');
  };

  return (
    <Popover.Popover>
      <Popover.PopoverTrigger asChild>
        <div
          style={{
            height: size,
            width: size,
            borderRadius: size / 2,
            fontSize,
          }}
          className='flex cursor-pointer items-center justify-center bg-primary font-bold text-white'
        >
          {name[0]}
        </div>
      </Popover.PopoverTrigger>
      <Popover.PopoverContent
        side='bottom'
        align='end'
        className='w-fit border-neutral-200 p-0'
      >
        <div className='border-b border-neutral-300 px-4 py-3'>
          <h3 className='font-semibold'>{name}</h3>
          <p className='mt-1 text-xs text-neutral-500'>{email}</p>
        </div>
        <div className='p-2'>
          <Button
            onClick={onLogout}
            className='w-full bg-red-600 hover:bg-red-700 focus-visible:ring-0'
          >
            Logout
          </Button>
        </div>
      </Popover.PopoverContent>
    </Popover.Popover>
  );
};
