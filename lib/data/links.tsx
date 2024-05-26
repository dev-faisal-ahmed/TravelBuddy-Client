import { Backpack as BackpackIcon, Users as UsersIcon } from 'lucide-react';

export const navLinks = [
  { title: 'Home', url: '/' },
  { title: 'Trips', url: '/trips' },
  { title: 'Add-Trip', url: '/trip' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Profile', url: '/profile' },
];

export const profileLinks = [
  { title: 'Trips', url: '/profile' },
  { title: 'Requested Trips', url: '/profile/requested-trips' },
];

export const sidebarLinks = [
  {
    title: 'Trips',
    url: '/admin/trips',
    icon: <BackpackIcon size={20} />,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: <UsersIcon size={20} />,
  },
];
