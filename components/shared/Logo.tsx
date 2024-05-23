import Link from 'next/link';
import { TravelIcon } from '../icons/TravelIcon';

export const Logo = () => {
  return (
    <Link className='flex items-center gap-2 font-bold' href={'/'}>
      <span className='text-primary'>
        <TravelIcon size={32} />
      </span>
      <h3>
        <span className='text-secondary-main'>Travel</span> Buddy
      </h3>
    </Link>
  );
};
