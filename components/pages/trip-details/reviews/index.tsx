import { TLoggedUser, TReview } from '@/lib/types';
import { ReviewCard } from './ReviewCard';

type TProps = {
  user: TLoggedUser | null;
  reviews: TReview[];
};

export const Reviews = ({ user, reviews }: TProps) => {
  return (
    <div className='mt-12'>
      <h3 className='mb-6 text-base font-semibold'>All Reviews.</h3>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} user={user} />
      ))}
    </div>
  );
};
