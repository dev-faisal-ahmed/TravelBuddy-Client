import { cn } from '@/lib/utils';

type TProps = {
  country: string;
  place: string;
  image: string;
  className?: string;
};

export const DestinationCard = ({
  country,
  place,
  image,
  className,
}: TProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${image})`,
        minHeight: 250,
      }}
      className={cn(
        'relative flex flex-col justify-end rounded-md bg-cover bg-center p-6',
        className,
      )}
    >
      <p className='absolute left-6 top-6 rounded-sm bg-primary px-3 py-1  text-sm text-white'>
        {country}
      </p>
      <h3 className='text-xl font-semibold tracking-wider text-white'>
        {place}
      </h3>
    </div>
  );
};
