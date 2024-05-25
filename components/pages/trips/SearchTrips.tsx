'use client';

import { Search as SearchIcon } from 'lucide-react';
import { CustomSelect } from '@/components/shared/form/CustomSelect';
import { DatePicker } from '@/components/shared/DatePicker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { tripTypes } from '@/lib/data/constants';
import { useSearch } from './useSearch';
import * as Dialog from '@/components/ui/dialog';

export const SearchTrips = () => {
  const {
    starDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedTripType,
    onTripTypeChange,
    destinationRef,
    keyWordRef,
    handleSearch,
    openModal,
    setOpenModal,
  } = useSearch();

  return (
    <Dialog.Dialog open={openModal} onOpenChange={setOpenModal}>
      <Dialog.DialogTrigger asChild className='w-full'>
        <div className='flex w-full items-center gap-2 rounded-sm border border-neutral-300 bg-white px-5 py-2 text-left text-sm text-neutral-400'>
          <SearchIcon />
          <h4>Search Here...</h4>
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

            <DatePicker
              label='Start Date'
              date={starDate}
              setDate={setStartDate}
            />
            <DatePicker label='End Date' date={endDate} setDate={setEndDate} />

            <Input
              ref={keyWordRef}
              label='Keyword'
              placeholder='Provide a keyword'
            />

            <CustomSelect
              selectedOption={selectedTripType}
              onSelectionChange={onTripTypeChange}
              options={tripTypes}
              placeholder='Select Any Trip Type'
              label='Trip Type'
            />
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
