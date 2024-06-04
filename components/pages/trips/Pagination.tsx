'use client';

import { TMeta } from '@/lib/types';
import { cn } from '@/lib/utils';
import { arrayMaker } from '@/lib/utils/helper';
import { makeUrl } from '@/lib/utils/searchParamsHelper';
import { useRouter } from 'next/navigation';

type TProps = {
  meta: TMeta;
  searchParams: Record<string, any>;
};

export const Pagination = ({ meta, searchParams }: TProps) => {
  const router = useRouter();

  const onPageChange = (page: number) => {
    const url = makeUrl('/trips', { ...searchParams, page });
    router.push(url);
  };

  return (
    <div className='mt-8 flex items-center justify-end gap-3'>
      {arrayMaker(meta.totalPages).map((eachPage) => (
        <div
          key={eachPage}
          className={cn(
            'flex size-10 cursor-pointer items-center justify-center rounded-sm border p-2 text-sm font-semibold',
            meta.page === eachPage && ' bg-primary text-white',
          )}
          onClick={() => onPageChange(eachPage)}
        >
          {eachPage}
        </div>
      ))}
    </div>
  );
};
