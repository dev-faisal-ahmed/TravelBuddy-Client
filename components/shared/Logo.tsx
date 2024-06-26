import Link from 'next/link';
import { TravelIcon } from '../icons/TravelIcon';

export const Logo = () => {
  return (
    <Link className='flex items-center gap-2 font-bold' href={'/'}>
      <span className='text-primary'>
        <TravelIcon size={28} />
      </span>
      <h3 className='text-lg'>
        <span className='text-secondary-main'>Travel</span> Buddy
      </h3>
    </Link>
  );
};
