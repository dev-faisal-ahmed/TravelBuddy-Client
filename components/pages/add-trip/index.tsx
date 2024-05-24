'use client';

import { Container } from '@/components/shared/Container';
import { useAddTrip } from './useAddTrip';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { DatePicker } from '@/components/shared/DatePicker';
import { CustomSelect } from '@/components/shared/form/CustomSelect';
import { tripTypes } from '@/lib/data/constants';
import { CustomTextArea } from '@/components/shared/form/CustomTextArea';
import { Button } from '@/components/ui/button';

export const AddTrip = () => {
  const {
    dates: { startDate, endDate, setStartDate, setEndDate },
    tripTypes: { selectedTripType, onTripTypeChange },
    handlers: { onAddTrip },
    form,
  } = useAddTrip();

  return (
    <Container className='max-w-screen-md py-12'>
      <form onSubmit={onAddTrip} className='rounded-md border p-6'>
        <h3 className='mb-6 font-semibold text-primary'>
          Add Trip Information
        </h3>
        <div className='grid gap-6 sm:grid-cols-2'>
          <CustomInput
            {...form.register('destination')}
            type='text'
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
            containerClassName='sm:col-span-2'
            label='Images'
            type='file'
            multiple
          />

          <CustomTextArea
            label='Itinerary'
            placeholder='Input Itinerary'
            {...form.register('itinerary')}
          />

          <CustomTextArea
            label='Description'
            placeholder='Input Description'
            {...form.register('description')}
          />

          <DatePicker
            date={startDate}
            setDate={setStartDate}
            label='Start Date'
          />
          <DatePicker date={endDate} setDate={setEndDate} label='End Date' />
        </div>
        <Button className='ml-auto mt-6 block'>Add Trip</Button>
      </form>
    </Container>
  );
};
