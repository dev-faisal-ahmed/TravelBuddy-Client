'use client';

import * as Dialog from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from './useSearch';
import { DatePicker } from '@/components/shared/DatePicker';
import { tripTypes } from '@/lib/data/constants';
import { CustomSelect } from '@/components/shared/form/CustomSelect';

export const SearchBar = () => {
  const {
    destinationRef,
    starDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedTripType,
    onTripTypeChange,
    handleSearch,
  } = useSearch();

  return (
    <Dialog.Dialog>
      <Dialog.DialogTrigger asChild>
        <div className='flex cursor-pointer items-center justify-between rounded-md bg-white p-3'>
          <h3 className='pl-2 text-sm text-neutral-600'>
            Search Trips Here ....
          </h3>
          <Button>Search</Button>
        </div>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent>
        <Dialog.DialogTitle>Filter Trips</Dialog.DialogTitle>
        <div className='mt-3'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <Input
              ref={destinationRef}
              label='Destination'
              containerClassName='sm:col-span-2'
              placeholder='Destination'
            />

            <div className='sm:col-span-2'>
              <CustomSelect
                selectedOption={selectedTripType}
                onSelectionChange={onTripTypeChange}
                options={tripTypes}
                placeholder='Select Any Trip Type'
                label='Trip Type'
              />
            </div>

            <DatePicker
              label='Start Date'
              date={starDate}
              setDate={setStartDate}
            />

            <DatePicker label='End Date' date={endDate} setDate={setEndDate} />
          </div>

          <div className='mt-6 flex items-center justify-end gap-3'>
            <Dialog.DialogClose>
              <Button variant={'destructive'}>Cancel</Button>
            </Dialog.DialogClose>
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};
