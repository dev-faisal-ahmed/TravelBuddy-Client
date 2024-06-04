import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { addTripRequestAction } from './addTripRequestAction';
import { useRouter } from 'next/navigation';

const addTripRequestSchema = z.object({
  address: z
    .string({ required_error: 'User address is required' })
    .min(4, { message: 'Min Length is 4' }),
});

export type TAddTripFromFields = z.infer<typeof addTripRequestSchema>;

export const useAddTripRequest = (
  tripId: string,
  phone: string | undefined,
) => {
  const form = useForm<TAddTripFromFields>({
    resolver: zodResolver(addTripRequestSchema),
  });

  const [loading, setLoading] = useState(false);
  const agreeRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onAddTripRequest = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Sending Trip Request...!');

    try {
      setLoading(true);

      if (!phone)
        throw new Error('Please add your phone number from your profile page');

      if (!agreeRef.current?.checked)
        throw new Error('You have to agree to the terms and condition');

      const response = await addTripRequestAction({
        address: data.address,
        phone: phone!,
        trip: tripId,
      });

      toast.success(response.message, { id: toastId });
      router.back();
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  });

  return { form, onAddTripRequest, agreeRef, loading };
};
