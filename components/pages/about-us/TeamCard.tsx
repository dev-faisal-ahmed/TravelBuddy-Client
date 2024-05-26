import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

type TProps = {
  image: string;
  name: string;
};

const size = 150;

export const TeamCard = ({ image, name }: TProps) => {
  return (
    <div className='min-w-[250px] max-w-[400px] rounded-md border border-neutral-300 p-6 text-center shadow'>
      <Image
        style={{ height: size, width: size }}
        className='mx-auto rounded-full'
        src={image}
        width={300}
        height={300}
        alt='User'
      />
      <h3 className='mt-5 text-lg font-semibold'>{name}</h3>
      <div className='mt-3 flex items-center justify-center gap-5 text-2xl'>
        <Link href={'https://www.linkedin.com'} target='_blank'>
          <FaLinkedin />
        </Link>
        <Link href={'https://twitter.com/'} target='_blank'>
          <FaTwitter />
        </Link>
        <Link href={'https://github.com'} target='_blank'>
          <FaGithub />
        </Link>
      </div>
    </div>
  );
};
