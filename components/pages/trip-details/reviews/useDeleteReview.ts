import { useState } from 'react';
import { toast } from 'sonner';
import { deleteReviewAction } from './deleteReviewAction';
import { useRouter } from 'next/navigation';

export const useDeleteReview = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onDelete = async (reviewId: string) => {
    const toastId = toast.loading('Deleting the review');
    try {
      setIsLoading(true);
      const response = await deleteReviewAction(reviewId);
      if (!response?.ok) throw new Error(response?.message);

      toast.success(response?.message, { id: toastId });
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onDelete };
};
