'use client';

import { FormEvent } from 'react';
import { IoMdSend } from 'react-icons/io';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { CustomInput } from '@/components/shared/form/CustomInput';
import { CustomTextArea } from '@/components/shared/form/CustomTextarea';

export const ContactUs = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success('We have received your message');
  };

  return (
    <div id='contact' className='mb-12 mt-20'>
      <h2 className='text-center text-2xl font-semibold text-primary'>
        Contact Us
      </h2>
      <p className='mx-auto mt-5 text-center text-neutral-600 md:max-w-[450px]'>
        If you have any query fell free to reach out to us.
      </p>
      <div className='mx-auto mt-16 w-full max-w-[550px] rounded-md border p-6'>
        <form className='space-y-5' onSubmit={onSubmit}>
          <div className='flex w-full flex-col items-center gap-5 md:flex-row'>
            <CustomInput
              containerClassName='w-full'
              label='Email'
              name='email'
              placeholder='Enter Your Email'
              type='email'
              required
            />
            <CustomInput
              containerClassName='w-full'
              label='Your Name'
              name='name'
              placeholder='Enter Your Name'
              type='text'
              required
            />
          </div>
          <CustomInput
            label='Subject'
            name='subject'
            placeholder='Subject'
            type='text'
            required
          />
          <div className='space-y-3'>
            <CustomTextArea
              label='Message'
              name='message'
              id='message'
              rows={4}
              required
            />
          </div>
          <Button className='ml-auto flex items-center gap-2'>
            <IoMdSend /> Send
          </Button>
        </form>
      </div>
    </div>
  );
};
