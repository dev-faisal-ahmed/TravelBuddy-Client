import * as Carousel from '@/components/ui/carousel';
import Image from 'next/image';

type TProps = {
  images: string[];
};

export const ImageCarousel = ({ images }: TProps) => {
  return (
    <div className='mx-12 md:mx-0'>
      <Carousel.Carousel>
        <Carousel.CarouselContent>
          {images.map((image) => (
            <Carousel.CarouselItem key={image}>
              <Image
                className='h-full min-h-[450px] w-full rounded-md object-cover object-center'
                src={image}
                height={400}
                width={500}
                alt='Image'
              />
            </Carousel.CarouselItem>
          ))}
        </Carousel.CarouselContent>
        <Carousel.CarouselPrevious />
        <Carousel.CarouselNext />
      </Carousel.Carousel>
    </div>
  );
};
