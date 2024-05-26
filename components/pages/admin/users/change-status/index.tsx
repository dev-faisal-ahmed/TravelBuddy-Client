'use client';

import * as Dialog from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { TUserStatus } from '@/lib/types';
import { useState } from 'react';
import { toast } from 'sonner';
import { changeStatus } from './changeStatusAction';

type TProps = {
  userId: string;
  userStatus: TUserStatus;
};

export const ChangeStatus = ({ userId, userStatus }: TProps) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onStatusChange = async () => {
    const toastId = toast.loading('Deleting the trip...!');
    try {
      setLoading(true);

      const response = await changeStatus(
        userId,
        userStatus === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE',
      );

      if (!response?.ok) throw new Error(response?.message);

      toast.success(response.message, { id: toastId });
      setIsModalOpen(false);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog.Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <Dialog.DialogTrigger asChild>
        <Button variant={'outline'}>
          {userStatus === 'ACTIVE' ? 'Block User' : 'Active User'}
        </Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent>
        <Dialog.DialogTitle>Are You Sure?</Dialog.DialogTitle>
        <div className='mt-6 flex items-center justify-end gap-6'>
          <Dialog.DialogClose asChild>
            <Button className='w-24' variant={'outline'}>
              Cancel
            </Button>
          </Dialog.DialogClose>
          <Button
            onClick={onStatusChange}
            disabled={loading}
            className='w-24'
            variant={'destructive'}
          >
            Yes
          </Button>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
