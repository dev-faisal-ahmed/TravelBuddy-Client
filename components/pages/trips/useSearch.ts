import { makeUrl, removeNonEmptyObject } from '@/lib/utils/searchParamsHelper';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export const useSearch = () => {
  const [openModal, setOpenModal] = useState(false);
  const [starDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedTripType, setSelectedTripType] = useState<string>();
  const destinationRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onTripTypeChange = (tripType: string) => setSelectedTripType(tripType);

  const handleSearch = () => {
    const url = makeUrl(
      '/trips',
      removeNonEmptyObject({
        destination: destinationRef?.current?.value,
        startDate: starDate?.toISOString(),
        endDate: endDate?.toISOString(),
        tripType: selectedTripType,
      }),
    );

    router.push(url);
    setOpenModal(false);
  };

  const clearFilter = () => {
    const url = makeUrl('/trips', removeNonEmptyObject({}));
    router.push(url);
  };

  return {
    starDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedTripType,
    onTripTypeChange,
    destinationRef,
    handleSearch,
    openModal,
    setOpenModal,
    clearFilter,
  };
};
