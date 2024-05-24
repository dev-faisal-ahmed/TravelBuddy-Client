'use client';

import * as Popover from '@/components/ui/popover';
import { Dispatch, SetStateAction } from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

type TProps = {
  label?: string;
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

export function DatePicker({ label, date, setDate }: TProps) {
  return (
    <div className='space-y-2'>
      <h3 className='pl-2 text-sm font-semibold'>{label}</h3>
      <Popover.Popover>
        <Popover.PopoverTrigger asChild>
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start bg-transparent text-left font-normal',
              !date && 'text-muted-foreground',
            )}
          >
            <CalendarIcon className='mr-2 h-4 w-4' />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </Popover.PopoverTrigger>
        <Popover.PopoverContent className='w-auto border-neutral-300 p-0'>
          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </Popover.PopoverContent>
      </Popover.Popover>
    </div>
  );
}
