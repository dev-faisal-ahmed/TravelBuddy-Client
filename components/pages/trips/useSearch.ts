import { makeUrl } from '@/lib/utils/searchParamsHelper';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const removeNonEmptyObject = (params: Record<string, any>) => {
  const keys = Object.keys(params);
  return keys.reduce((acc: Record<string, any>, key) => {
    if (params[key]) acc[key] = params[key];
    return acc;
  }, {});
};

export const useSearch = () => {
  const [openModal, setOpenModal] = useState(false);
  const [starDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedTripType, setSelectedTripType] = useState<string>();
  const destinationRef = useRef<HTMLInputElement>(null);
  const keyWordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onTripTypeChange = (tripType: string) => setSelectedTripType(tripType);

  const handleSearch = () => {
    const key = keyWordRef.current?.value.split(' ').join(',');
    const url = makeUrl(
      '/trips',
      removeNonEmptyObject({
        destination: destinationRef?.current?.value,
        startDate: starDate?.toISOString(),
        endDate: endDate?.toISOString(),
        key: key,
        tripType: selectedTripType,
      }),
    );

    router.push(url);
    router.refresh();
    setOpenModal(false);
  };

  return {
    starDate,
    setStartDate,
    endDate,
    setEndDate,
    selectedTripType,
    onTripTypeChange,
    destinationRef,
    keyWordRef,
    handleSearch,
    openModal,
    setOpenModal,
  };
};
