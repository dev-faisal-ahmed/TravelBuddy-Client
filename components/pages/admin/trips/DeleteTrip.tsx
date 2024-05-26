'use client';

import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';

export const DeleteTrip = () => {
  return (
    <Dialog.Dialog>
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
            // onClick={() => onDeleteTrip(tripId)}
            // disabled={loading}
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
