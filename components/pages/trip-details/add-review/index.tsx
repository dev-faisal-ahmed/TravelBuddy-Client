'use client';

import { CustomTextArea } from '@/components/shared/form/CustomTextarea';
import { AddRating } from '@/components/shared/Rating';
import { Button } from '@/components/ui/button';
import { useAddReview } from './useAddReview';
import { TLoggedUser } from '@/lib/types';
import { cn } from '@/lib/utils';

type TProps = {
  tripId: string;
  user: TLoggedUser | null;
  creatorId: string;
};

export const AddReview = ({ tripId, user, creatorId }: TProps) => {
  const { states, handler, form } = useAddReview(tripId, user);
  const { rating } = states;
  const { onRatingChange, onAddReview } = handler;

  return (
    <form onSubmit={onAddReview} className='mt-6'>
      <h4 className='mb-2 font-semibold'>What&apos;s your review</h4>

      <AddRating rating={rating} onRatingChange={onRatingChange} />
      <CustomTextArea
        {...form.register('details')}
        disabled={user?._id === creatorId}
        className='mt-6'
        label='Details'
        placeholder='Say something about this trip.'
        error={form.formState.errors.details?.message}
      />

      <Button
        disabled={user?._id === creatorId}
        className={cn('ml-auto mt-6 block')}
      >
        Submit
      </Button>
    </form>
  );
};
