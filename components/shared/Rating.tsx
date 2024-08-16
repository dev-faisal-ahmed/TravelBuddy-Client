'use client';

import { FaStarHalfAlt } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { FaRegStar } from 'react-icons/fa';

type TAddRatingProps = {
  rating: number;
  onRatingChange: (value: number) => void;
};

export const AddRating = ({ rating, onRatingChange }: TAddRatingProps) => {
  const total = 5;

  return (
    <div className='flex items-center gap-3'>
      {/* Full Star */}
      {[...Array(rating)].map((_, index) => (
        <FaStar
          className='cursor-pointer text-primary'
          onClick={() => onRatingChange(index)}
          key={index}
        />
      ))}

      {/* empty star */}
      {[...Array(total - rating)].map((_, index) => (
        <FaRegStar
          onClick={() => onRatingChange(index + 1 + rating)}
          className='cursor-pointer text-primary'
          key={index + rating}
        />
      ))}
    </div>
  );
};
