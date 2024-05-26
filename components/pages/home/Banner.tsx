import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Banner = () => {
  return (
    <Container className='flex flex-col items-center gap-6 py-6 sm:py-12 md:flex-row md:gap-24 md:pl-24'>
      <div className='px-6 lg:w-[100%] '>
        <div className='relative'>
          <Image
            className='z-10 h-[350px] w-full rounded-t-full object-cover md:h-[550px]'
            src={'/images/banner.jpg'}
            width={500}
            height={500}
            alt='Banner'
          />
          <div className='absolute left-4 top-0 -z-10 h-[350px] w-full rounded-t-full border sm:left-8 md:h-[550px]' />
          <div className='absolute -left-6 top-0  -z-10 h-[350px] w-full rounded-t-full bg-[#043C39] sm:-left-16 md:h-[550px]' />
        </div>
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

        <Link className='mt-12 block' href={'/trip'}>
          <Button>Share Your Trips</Button>
        </Link>
      </div>
    </Container>
  );
};
