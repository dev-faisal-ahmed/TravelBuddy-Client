'use server';

import { apiUrl } from '../data/apiUrl';

export const uploadImageAction = async (formData: FormData) => {
  const imageBBResponse = await fetch(apiUrl.imageBBUrl, {
    method: 'POST',
    body: formData,
  });

  const imageData = await imageBBResponse.json();
  if (!imageData.success) throw new Error(imageData?.message);
  console.log(imageData);
  return imageData?.data?.url;
};
