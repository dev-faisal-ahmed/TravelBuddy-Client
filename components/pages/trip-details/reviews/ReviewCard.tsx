'use client';

import { Rating } from '@/components/shared/Rating';
import { TLoggedUser, TReview } from '@/lib/types';
import { useDeleteReview } from './useDeleteReview';
import { IoMdTrash } from 'react-icons/io';

type TProps = {
  review: TReview;
  user: TLoggedUser | null;
};

export const ReviewCard = ({ review, user }: TProps) => {
  const { isLoading, onDelete } = useDeleteReview();

  return (
    <div className='mb-6 flex gap-3'>
      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white'>
        {review?.user?.name[0]}
      </div>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <h2>{review?.user?.name}</h2>
          {!isLoading && review.user._id === user?._id && (
            <IoMdTrash
              onClick={() => onDelete(review._id)}
              className='cursor-pointer text-red-600 duration-300 hover:scale-125'
              size={24}
            />
          )}
        </div>
        <p className='mb-2 text-sm text-gray-600'>{review.details}</p>
        <Rating rating={review.rating} />
      </div>
    </div>
  );
};
