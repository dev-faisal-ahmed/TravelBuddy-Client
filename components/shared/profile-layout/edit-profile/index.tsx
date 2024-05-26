'use client';

import * as Dialog from '@/components/ui/dialog';
import { PencilLine as PencilLineIcon } from 'lucide-react';
import { CustomInput } from '../../form/CustomInput';
import { useEditProfile } from './useEditProfile';
import { TLoggedUser } from '@/lib/types';
import { Button } from '@/components/ui/button';

type TProps = {
  user: TLoggedUser;
};

export const EditProfile = ({ user }: TProps) => {
  const { form, onEditProfile, loading, isOpenModal, setIsOpenModal } =
    useEditProfile(user);
  const {
    formState: { errors },
  } = form;

  return (
    <Dialog.Dialog open={isOpenModal} onOpenChange={setIsOpenModal}>
      <Dialog.DialogTrigger asChild>
        <Button className='flex gap-3'>
          Edit Profile
          <PencilLineIcon size={18} />
        </Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent>
        <Dialog.DialogTitle>Edit Profile</Dialog.DialogTitle>
        <form onSubmit={onEditProfile} className='flex flex-col gap-4'>
          <CustomInput
            error={errors.name?.message}
            label={'Name'}
            placeholder='Name'
            {...form.register('name')}
          />
          <CustomInput
            error={errors.email?.message}
            placeholder='Email'
            label={'Email'}
            {...form.register('email')}
          />

          <Button disabled={loading} className='mt-3'>
            Edit Profile
          </Button>
        </form>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
