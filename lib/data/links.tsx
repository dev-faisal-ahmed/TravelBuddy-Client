import {
  Backpack as BackpackIcon,
  Users as UsersIcon,
  LayoutDashboard as LayoutDashboardIcon,
} from 'lucide-react';

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
  { title: 'Join Requests', url: '/profile/join-requests' },
];

export const sidebarLinks = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: <LayoutDashboardIcon size={20} />,
  },
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
