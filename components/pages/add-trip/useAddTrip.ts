import { tripTypes } from '@/lib/data/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const addTripFormSchema = z.object({
  images: z
    .string({ required_error: 'Please Select Any Image' })
    .min(1)
    .array(),

  destination: z.string({ required_error: 'Destination is required' }).min(2),
  description: z.string({ required_error: 'Description is required' }).min(10),
  itinerary: z.string({ required_error: 'Itinerary is required' }).min(10),
  tripType: z.enum([...(tripTypes as [string, ...string[]])]),
});

export type TAddTripFormFields = z.infer<typeof addTripFormSchema>;

export const useAddTrip = () => {
  const form = useForm<TAddTripFormFields>({
    resolver: zodResolver(addTripFormSchema),
  });

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedTripType, setSelectedTripTypes] = useState<string>();

  // handlers

  const onTripTypeChange = (tripType: string) => setSelectedTripTypes(tripType);

  const onAddTrip = form.handleSubmit(async (data) => {});

  return {
    dates: { startDate, setStartDate, endDate, setEndDate },
    tripTypes: { selectedTripType, onTripTypeChange },
    handlers: { onAddTrip },
    form,
  };
};
