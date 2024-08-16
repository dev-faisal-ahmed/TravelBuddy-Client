'use client';

import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TLoggedUser, TTrip } from '@/lib/types';
import { useUpdateTrip } from './useUpdateTrip';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { CustomSelect } from '@/components/shared/form/CustomSelect';
import { tripTypes } from '@/lib/data/constants';
import { CustomTextArea } from '@/components/shared/form/CustomTextarea';
import { DatePicker } from '@/components/shared/DatePicker';
import { Button } from '@/components/ui/button';

type TProps = {
  trip: TTrip;
  user: TLoggedUser;
};

export const UpdateTrip = ({ trip, user }: TProps) => {
  const {
    dates: { startDate, setStartDate, endDate, setEndDate },
    tripTypes: { selectedTripType, onTripTypeChange },
    handlers: { onTripUpdate },
    imageRef,
    loading,
    form,
  } = useUpdateTrip(trip);

  const {
    formState: { errors },
  } = form;

  return (
    <Container className='mx-auto max-w-screen-md py-12'>
      {trip.user._id === user._id ? (
        <>
          <form onSubmit={onTripUpdate} className='rounded-md border p-6'>
            <h3 className='mb-6 font-semibold text-primary'>
              Update Trip Information
            </h3>
            <div className='grid gap-6 sm:grid-cols-2'>
              <CustomInput
                {...form.register('destination')}
                type='text'
                error={errors.destination?.message}
                placeholder='Destination'
                label='Destination'
              />

              <CustomSelect
                label='Trip Type'
                selectedOption={selectedTripType}
                onSelectionChange={onTripTypeChange}
                placeholder='Select Trip Type'
                options={tripTypes}
              />

              <CustomInput
                ref={imageRef}
                containerClassName='sm:col-span-2'
                label='Images'
                type='file'
                multiple
              />

              <CustomTextArea
                error={errors.itinerary?.message}
                label='Itinerary'
                placeholder='Input Itinerary'
                {...form.register('itinerary')}
              />

              <CustomTextArea
                error={errors.description?.message}
                label='Description'
                placeholder='Input Description'
                {...form.register('description')}
              />

              <DatePicker
                date={startDate}
                setDate={setStartDate}
                label='Start Date'
              />
              <DatePicker
                date={endDate}
                setDate={setEndDate}
                label='End Date'
              />
            </div>
            <Button disabled={loading} className='ml-auto mt-6 block'>
              Update Trip
            </Button>
          </form>
        </>
      ) : (
        <Message message='You are not owner of this trip!' />
      )}
    </Container>
  );
};
