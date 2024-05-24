'use client';

import * as Sheet from '@/components/ui/sheet';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { navLinks } from '@/lib/data/navLinks';
import { ActiveLink } from './ActiveLink';
import { Logo } from '../Logo';
import { useState } from 'react';

export const MobileMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <Sheet.Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <Sheet.SheetTrigger className='cursor-pointer' asChild>
          <MenuIcon size={24} />
        </Sheet.SheetTrigger>
        <Sheet.SheetContent
          className='max-w-[250px] outline-none'
          side={'left'}
        >
          <div className='flex items-center justify-between'>
            <Logo />
            <Sheet.SheetClose className='cursor-pointer' asChild>
              <XIcon size={20} />
            </Sheet.SheetClose>
          </div>
          <div className='mt-6 flex flex-col items-center'>
            {navLinks.map((link) => (
              <div
                onClick={() => setIsSheetOpen(false)}
                key={link.url}
                className='w-full'
              >
                <ActiveLink className='block w-full' {...link} />
              </div>
            ))}
          </div>
        </Sheet.SheetContent>
      </Sheet.Sheet>
    </div>
  );
};
