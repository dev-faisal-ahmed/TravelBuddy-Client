import { IoLogoFacebook } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';

export const footerData = {
  icons: [
    {
      color: '#2563EB',
      icon: <IoLogoFacebook />,
      url: 'https://www.facebook.com/',
    },
    {
      color: '#2563EB',
      icon: <FaTwitter />,
      url: 'https://twitter.com/',
    },
    {
      color: '#BE185D',
      icon: <RiInstagramFill />,
      url: 'https://www.instagram.com/',
    },
    {
      color: '#3B82F6',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/',
    },
  ],

  takeTour: ['Features', 'Travelers', 'Our Partners', 'Trips', 'Support'],

  ourCompany: ['About Us', 'Admins', 'Blog', 'Media', 'Contact Us'],
};
