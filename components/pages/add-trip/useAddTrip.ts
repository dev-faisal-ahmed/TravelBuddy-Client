import { uploadImageAction } from '@/lib/actions/uploadImageAction';
import { addTripAction } from './addTripAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const addTripFormSchema = z.object({
  destination: z
    .string({ required_error: 'Destination is required' })
    .min(2, { message: 'Min length is 2' }),
  description: z.string({ required_error: 'Description is required' }).min(10),
  itinerary: z.string({ required_error: 'Itinerary is required' }).min(10),
});

export type TAddTripFormFields = z.infer<typeof addTripFormSchema>;

export const useAddTrip = () => {
  const form = useForm<TAddTripFormFields>({
    resolver: zodResolver(addTripFormSchema),
  });

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedTripType, setSelectedTripTypes] = useState<string>();
  const imageRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  // handlers
  const onTripTypeChange = (tripType: string) => setSelectedTripTypes(tripType);

  const onAddTrip = form.handleSubmit(async (data) => {
    const toastId = toast.loading('Creating a trip...!');
    try {
      setLoading(true);

      const imageTarget = imageRef.current;
      if (!selectedTripType) throw new Error('Please Select Trip Types');
      if (!imageTarget || !imageTarget.files?.length)
        throw new Error('Please Select An Image');
      if (!startDate) throw new Error('Please Select Start Date');
      if (!endDate) throw new Error('Please Select End Date');

      if (startDate.getTime() > endDate.getTime())
        throw new Error('Start date has to be before end date.');

      // uploading multiple images
      const images: string[] = [];
      for (let i = 0; i < imageTarget.files.length; i++) {
        const imageForm = new FormData();
        imageForm.append('image', imageTarget.files[i]);
        const imageUrl = await uploadImageAction(imageForm);
        if (imageUrl) images.push(imageUrl);
      }

      const response = await addTripAction({
        ...data,
        startDate,
        endDate,
        tripType: selectedTripType,
        images,
      });

      if (!response.ok) throw new Error(response.message);

      toast.success(response.message, { id: toastId });
      form.reset();
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
    handlers: { onAddTrip },
    form,
    imageRef,
    loading,
  };
};
