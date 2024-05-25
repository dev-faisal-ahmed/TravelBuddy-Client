'use client';

import { uploadImageAction } from '@/lib/actions/uploadImageAction';
import { TTrip, TTripType } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { updateTripAction } from './updateTripAction';
import { useRouter } from 'next/navigation';

const updateTripFormSchema = z.object({
  destination: z
    .string({ required_error: 'Destination is required' })
    .min(2, { message: 'Min length is 2' }),
  description: z.string({ required_error: 'Description is required' }).min(10),
  itinerary: z.string({ required_error: 'Itinerary is required' }).min(10),
});

export type TUpdateTripFormFields = z.infer<typeof updateTripFormSchema>;

export const useUpdateTrip = (trip: TTrip) => {
  const form = useForm<TUpdateTripFormFields>({
    resolver: zodResolver(updateTripFormSchema),
    defaultValues: {
      destination: trip.destination,
      description: trip.description,
      itinerary: trip.itinerary,
    },
  });

  const [startDate, setStartDate] = useState<Date | undefined>(
    new Date(trip.startDate),
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    new Date(trip.endDate),
  );
  const [selectedTripType, setSelectedTripTypes] = useState<string>(
    trip.tripType,
  );
  const imageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // handlers
  const onTripTypeChange = (tripType: string) => setSelectedTripTypes(tripType);

  const onTripUpdate = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Updating trip...!');
    try {
      setLoading(true);

      const imageTarget = imageRef.current;

      if (startDate!.getTime() > endDate!.getTime())
        throw new Error('Start date has to be before end date.');

      // uploading multiple images
      const images: string[] = [];
      if (imageTarget?.files?.length) {
        for (let i = 0; i < imageTarget.files.length; i++) {
          const imageForm = new FormData();
          imageForm.append('image', imageTarget.files[i]);
          const imageUrl = await uploadImageAction(imageForm);
          if (imageUrl) images.push(imageUrl);
        }
      }

      const updateTripPayload: Partial<TTrip> = {
        ...data,
        startDate,
        endDate,
        tripType: selectedTripType as TTripType,
      };

      if (images.length) {
        updateTripPayload.images = images;
      }

      const response = await updateTripAction(updateTripPayload, trip._id);

      if (!response.ok) throw new Error(response.message);

      toast.success(response.message, { id: toastId });
      router.back();
    } catch (err: any) {
      console.log(err);
      toast.error(err.message || 'something went wrong', { id: toastId });
    } finally {
      setLoading(false);
    }
  });

  return {
    dates: { startDate, setStartDate, endDate, setEndDate },
    tripTypes: { selectedTripType, onTripTypeChange },
    handlers: { onTripUpdate },
    form,
    imageRef,
    loading,
  };
};
