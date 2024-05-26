'use client';

import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';
import { useState } from 'react';
import { toast } from 'sonner';
import { deleteTripAction } from './deleteTripAction';

type TProps = {
  tripId: string;
};

export const DeleteTrip = ({ tripId }: TProps) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteTrip = async () => {
    const toastId = toast.loading('Deleting the trip...!');
    try {
      setLoading(true);
      const response = await deleteTripAction(tripId);
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
        <Button variant={'destructive'}>Delete</Button>
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
            onClick={onDeleteTrip}
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
