import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { SearchBar } from './search-bar';

export const Banner = () => {
  return (
    <Container className='flex flex-col items-center gap-12 py-6 sm:py-12 md:flex-row md:gap-24'>
      <div className='px-6 lg:w-[100%]'>
        <Image
          style={{ boxShadow: '5px 0 10px 2px white' }}
          className='h-[350px] w-full rounded-t-full border-l-[40px] border-r-4 object-cover md:h-[550px]'
          src={'/images/banner.jpg'}
          width={500}
          height={500}
          alt='Banner'
        />
      </div>

      <div className='w-full'>
        <h1 className='mb-2 text-2xl  font-bold  tracking-widest text-primary md:text-4xl'>
          Explore Together
        </h1>
        <h1 className='text-xl font-semibold tracking-wider md:text-3xl'>
          Connecting Travelers for Shared Journeys
        </h1>

        <p className='mt-6 text-justify text-neutral-600'>
          Discover new horizons as you journey with like-minded explorers,
          creating memories that transcend borders and cultures. Join our
          community to share your adventures and find companions for your next
          unforgettable trip.
        </p>

        <Link className='my-12 block' href={'/trip'}>
          <Button>Share Your Trips</Button>
        </Link>
        <SearchBar />
      </div>
    </Container>
  );
};
