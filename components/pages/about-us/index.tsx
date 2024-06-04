import { Container } from '@/components/shared/Container';
import { TeamCard } from './TeamCard';
import { ContactUs } from './ContactUs';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <>
      <section className='bg-primary-100'>
        <Container className='flex flex-col items-center justify-center gap-4 p-12 text-center md:p-24'>
          <h3 className='text-2xl font-semibold tracking-widest text-primary sm:text-4xl'>
            About Us
          </h3>
          <p className='text-sm text-neutral-600 sm:text-base'>
            All the information about this platform is given below
          </p>
        </Container>
      </section>
      <Container className='pb-12 pt-20'>
        <div className='flex flex-col items-center gap-12 md:flex-row'>
          <div className='w-full'>
            <Image
              className='h-[550px] w-full rounded-md object-cover object-center'
              src={'/images/mission.png'}
              width={400}
              height={400}
              alt='Mission'
            />
          </div>
          <div className='w-full'>
            <h2 className='mb-2 text-2xl font-semibold text-primary'>
              Mission.{' '}
            </h2>
            <p className='text-justify text-neutral-600'>
              Our mission is to foster a vibrant travel community by connecting
              individuals through shared travel experiences. We aim to create a
              platform where users can easily discover, share, and join tours,
              promoting cultural exchange, safety in numbers, and enriching
              travel experiences. By leveraging the power of community, we
              strive to make travel more accessible, enjoyable, and
              collaborative.
            </p>
            <h2 className='mb-2 mt-5 text-2xl font-semibold text-primary'>
              Vision.{' '}
            </h2>
            <p className='text-justify text-neutral-600'>
              To become the go-to platform for travel enthusiasts worldwide,
              where planning, sharing, and experiencing tours together enriches
              the travel journey. We envision a global community where travel is
              not just about destinations, but about the connections and shared
              experiences that make each journey memorable.
            </p>
          </div>
        </div>
      </Container>
      <div className='mt-12 bg-white py-12'>
        <h3 className='mb-12 text-center text-2xl font-semibold text-primary'>
          Our Team
        </h3>
        <div className='flex flex-wrap items-center justify-center gap-12'>
          <TeamCard image='/images/teams/user-1.png' name='Will Smith' />
          <TeamCard image='/images/teams/user-2.png' name='Morgan Freeman' />
          <TeamCard image='/images/teams/user-3.png' name='Emma Watson' />
        </div>
      </div>
      <div>
        <Container>
          <ContactUs />
        </Container>
      </div>
    </>
  );
};
