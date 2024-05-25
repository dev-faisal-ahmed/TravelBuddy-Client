'use client';

import { Button } from '@/components/ui/button';
import * as Dialog from '@/components/ui/dialog';
import { PencilLine as PencilLineIcon } from 'lucide-react';

export const EditProfile = () => {
  return (
    <Dialog.Dialog>
      <Dialog.DialogTrigger asChild>
        <Button className='flex gap-3'>
          Edit Profile
          <PencilLineIcon size={18} />
        </Button>
      </Dialog.DialogTrigger>
    </Dialog.Dialog>
  );
};
