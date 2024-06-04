import { Container } from '@/components/shared/Container';
import { Message } from '@/components/shared/Message';
import { TJoinRequest } from '@/lib/types';
import { JoinRequestCard } from './JoinRequestCard';

type TProps = {
  joinRequests: TJoinRequest[];
};

export const JoinRequest = ({ joinRequests }: TProps) => {
  return (
    <Container className='py-6'>
      {joinRequests && joinRequests.length ? (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {joinRequests.map((joinRequest) => (
            <JoinRequestCard key={joinRequest._id} {...joinRequest} />
          ))}
        </div>
      ) : (
        <Message message='No Join request has found' />
      )}
    </Container>
  );
};
