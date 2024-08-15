'use client';

import { toast } from 'sonner';
import { Container } from '@/components/shared/Container';
import { FormEvent } from 'react';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { Button } from '@/components/ui/button';
import { TLoggedUser } from '@/lib/types';

type TProps = {
  user: TLoggedUser | null;
};

export const WishList = ({ user }: TProps) => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!user) return toast.error('Please Login First');
    const form = event.target as HTMLFormElement;
    toast.success('We Have Got Your Request!!');
    form.reset();
  };

  return (
    <Container className={'pb-12 pt-6'}>
      <h3 className='mb-6 text-xl font-semibold '>
        Request To Create New Trips
      </h3>

      <form onSubmit={onSubmit}>
        <div className='flex flex-col rounded-lg border border-primary-100 p-6 md:flex-row'>
          <div className='flex-1 p-6'>
            <h2 className='mb-6 text-lg font-semibold'>User info</h2>
            <CustomInput
              label={'Name'}
              placeholder='Login First'
              defaultValue={user?.name}
              readOnly={true}
            />
            <CustomInput
              containerClassName={'mt-3'}
              label={'Email'}
              defaultValue={user?.email}
              placeholder='Login First'
              readOnly={true}
            />
          </div>
          <div className='flex-1 border-t border-primary-100 p-6 md:border-l md:border-t-0'>
            <h2 className='mb-6 text-lg font-semibold'>Destination Info</h2>
            <CustomInput
              label={'Place Name'}
              placeholder={'Input Place Name'}
              required={true}
            />
            <CustomInput
              containerClassName={'mt-3'}
              label={'Country Name'}
              placeholder={'Input Country Name'}
              required={true}
            />
          </div>
        </div>
        <Button className={'ml-auto mt-5 block'}>Submit</Button>
      </form>
    </Container>
  );
};
