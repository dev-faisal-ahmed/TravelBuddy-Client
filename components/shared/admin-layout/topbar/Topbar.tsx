'use client';

import * as Sheet from '@/components/ui/sheet';
import { MenuIcon, Warehouse as WarehouseIcon } from 'lucide-react';
import { Sidebar } from '../sidebar/Sidebar';
import { usePathname } from 'next/navigation';
import { generateTitle } from '@/lib/utils/linkHelper';
import { ProfileIcon } from '../../profile-icon/ProfileIcon';
import { TLoggedUser } from '@/lib/types';

type TProps = {
  user: TLoggedUser;
};

export function Topbar({ user }: TProps) {
  const pathName = usePathname();
  return (
    <nav className='flex h-fit items-center justify-between p-6'>
      <div className='block lg:hidden'>
        <Sheet.Sheet>
          <Sheet.SheetTrigger asChild>
            <MenuIcon className='cursor-pointer' />
          </Sheet.SheetTrigger>
          <Sheet.SheetContent className='bg-transparent p-0' side={'left'}>
            <Sidebar className='border-none' />
          </Sheet.SheetContent>
        </Sheet.Sheet>
      </div>

      <h2 className='text-xl font-semibold text-primary'>
        {generateTitle(pathName)}
      </h2>
      <ProfileIcon name={user.name} email={user.email} />
    </nav>
  );
}
