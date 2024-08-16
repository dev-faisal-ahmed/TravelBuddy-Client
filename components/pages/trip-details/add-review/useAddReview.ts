'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { addReviewAction } from './addReviewAction';
import { toast } from 'sonner';
import { TLoggedUser } from '@/lib/types';

const addReviewSchema = z.object({
  details: z.string().min(1, { message: 'Details is required' }),
});

type TAddReviewFormFields = z.infer<typeof addReviewSchema>;

export const useAddReview = (tripId: string, user: TLoggedUser | null) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TAddReviewFormFields>({
    resolver: zodResolver(addReviewSchema),
  });

  // handlers
  const onRatingChange = (rating: number) => setRating(rating);

  const onAddReview = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Adding review!');

    try {
      setIsLoading(true);
      if (!user) throw Error('Login before add review');

      if (rating === 0) throw new Error('Please select the rating');

      const response = await addReviewAction({
        details: data.details,
        rating,
        trip: tripId,
      });

      if (!response?.ok) throw new Error(response?.message);
      toast.success(response?.message, { id: toastId });
      form.reset();
    } catch (error: any) {
      toast.error(error?.message || 'Something went wrong', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  });

  return {
    states: { rating, isLoading },
    handler: { onRatingChange, onAddReview },
    form,
  };
};
