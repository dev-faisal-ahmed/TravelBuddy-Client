import { useState } from 'react';
import { toast } from 'sonner';
import { responseRequest } from './responseRequestAction';

export const useResponseRequest = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onResponse = async (_id: string, isAccepted: boolean) => {
    const toastId = toast.loading('Responding to the request..!');
    try {
      setIsLoading(true);
      const response = await responseRequest({ _id, isAccepted });

      if (!response.ok) throw new Error(response.message);

      toast.success(response.message, { id: toastId });
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, onResponse };
};
