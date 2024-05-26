import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';
import { footerData } from '@/lib/data/footerData';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='border-t border-neutral-300 bg-white py-10 text-sm shadow'>
      <Container className={'grid gap-16 lg:grid-cols-4 lg:gap-0'}>
        <div>
          <Logo />
          <p className='mt-4 text-justify text-sm text-neutral-500'>
            Discover new horizons as you journey with like-minded explorers,
            creating memories that transcend borders and cultures. Join our
            community to share your adventures and find companions for your next
            unforgettable trip.
          </p>

          <div className='mx-auto mt-5 flex w-fit items-center gap-5 lg:mx-0'>
            {footerData.icons.map(({ icon, url, color }) => (
              <a
                style={{ color: color }}
                href={url}
                target='_blank'
                className='cursor-pointer text-3xl transition hover:scale-125'
                key={url}
                rel='noreferrer'
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <h1 className='mb-5 text-base font-semibold'>Take a tour</h1>
          <div className='flex flex-col gap-3'>
            {footerData.takeTour.map((link) => (
              <p key={link} className='cursor-pointer font-medium'>
                {link}
              </p>
            ))}
          </div>
        </div>

        <div className='text-center'>
          <h1 className='mb-5 whitespace-nowrap text-base font-semibold '>
            Our Company
          </h1>
          <div className='flex flex-col gap-3'>
            {footerData.ourCompany.map((link) => (
              <p key={link} className='cursor-pointer font-medium'>
                {link}
              </p>
            ))}
          </div>
        </div>

        <div className='text-center md:text-left'>
          <h1 className='mb-3 text-base font-semibold'>Subscribe</h1>
          <p className='text-neutral-500'>Subscribe to get up to date</p>
          <div className='mt-7 flex rounded-md border-2 p-2'>
            <input
              className='bg-transparent pl-2 outline-none'
              type='text'
              placeholder='Email Address'
            />
            <div className='ml-auto text-2xl text-primary-500'>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
