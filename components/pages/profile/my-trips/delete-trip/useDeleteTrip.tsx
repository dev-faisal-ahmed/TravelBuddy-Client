import { deleteTripAction } from './deleteTripAction';
import { useState } from 'react';
import { toast } from 'sonner';

export const useDeleteTrip = () => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteTrip = async (tripId: string) => {
    const toastId = toast.loading('Deleting Trip');
    try {
      setLoading(true);
      const response = await deleteTripAction(tripId);
      if (!response?.ok) throw new Error(response?.message);

      toast.success(response.message, { id: toastId });
      setIsModalOpen(false);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return { loading, isModalOpen, setIsModalOpen, onDeleteTrip };
};
