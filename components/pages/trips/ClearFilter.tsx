'use client';

import { Button } from '@/components/ui/button';
import { useSearch } from './useSearch';
import { SlidersHorizontal as SlidersHorizontalIcon } from 'lucide-react';

export const ClearFilter = () => {
  const { clearFilter } = useSearch();
  return (
    <div>
      <Button onClick={clearFilter} size={'icon'}>
        <SlidersHorizontalIcon />
      </Button>
    </div>
  );
};
