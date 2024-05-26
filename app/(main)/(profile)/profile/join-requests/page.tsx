import { JoinRequest } from '@/components/pages/profile/join-request';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TJoinRequest } from '@/lib/types';
import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';

const getJoinRequests = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.joinRequests), {
    cache: 'no-store',
    next: { tags: [tags.joinRequests] },
  });

  const tripRequests = await response.json();
  return tripRequests?.data as TJoinRequest[];
};

export default async function JoinRequestPage() {
  const joinRequests = await getJoinRequests();
  console.log(joinRequests);
  return <JoinRequest joinRequests={joinRequests} />;
}
