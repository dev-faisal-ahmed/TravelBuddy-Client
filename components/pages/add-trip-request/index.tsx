'use client';

import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TLoggedUser, TRequestTripId, TTrip } from '@/lib/types';
import { useAddTripRequest } from './useAddTripRequest';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { Button } from '@/components/ui/button';

type TProps = {
  trip: TTrip;
  user: TLoggedUser;
  requestedTrips: TRequestTripId[];
};

const isAlreadyRequested = (
  requestedTrips: TRequestTripId[],
  tripId: string,
) => {
  for (const eachTrip of requestedTrips) {
    if (tripId === eachTrip.trip) return true;
  }

  return false;
};

export const AddTripRequest = ({ trip, user, requestedTrips }: TProps) => {
  const { form, onAddTripRequest, agreeRef, loading } = useAddTripRequest(
    trip?._id,
  );

  const {
    formState: { errors },
  } = form;

  console.log(requestedTrips);

  return (
    <Container className='py-12'>
      {trip ? (
        <div className='mx-auto max-w-[720px] rounded-md border p-6'>
          <h3 className='mb-6 font-semibold text-primary'>
            Create Trip Request
          </h3>
          <form onSubmit={onAddTripRequest}>
            <div className='grid gap-4 sm:grid-cols-2'>
              <CustomInput value={user.name} readOnly label='Name' />
              <CustomInput value={user.email} readOnly label='Email' />
              <CustomInput
                {...form.register('phone')}
                type='number'
                label='Phone'
                placeholder='Input Your Phone Number'
                error={errors?.phone?.message}
              />
              <CustomInput
                {...form.register('address')}
                label='Address'
                placeholder='Input Your Address'
                error={errors?.address?.message}
              />
            </div>
            <div className='mt-4 flex items-center gap-3'>
              <input
                className='cursor-pointer accent-primary'
                type='checkbox'
                id='agree'
                ref={agreeRef}
              />
              <label className='cursor-pointer' htmlFor='agree'>
                I agree with all terms and conditions
              </label>
            </div>
            {isAlreadyRequested(requestedTrips, trip._id) ? (
              <Button disabled className='ml-auto mt-3 block'>
                You Have Already Added This Trip
              </Button>
            ) : (
              <Button disabled={loading} className='ml-auto mt-3 block'>
                Sent Trip Request
              </Button>
            )}
          </form>
        </div>
      ) : (
        <Message message='Trip Does Not Exist' />
      )}
    </Container>
  );
};
