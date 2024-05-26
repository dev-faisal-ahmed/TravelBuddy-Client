import * as Table from '@/components/ui/table';
import { Message } from '@/components/shared/Message';
import { TAdminTrip } from '@/lib/types';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { DeleteTrip } from './delete-trip';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

type TProps = {
  trips: TAdminTrip[];
};

export const AdminTrips = ({ trips }: TProps) => {
  const tableHeadClass = `bg-slate-100 text-center font-semibold uppercase whitespace-nowrap`;
  return (
    <div className='my-5 rounded-md bg-white p-5 shadow'>
      {trips && trips.length ? (
        <>
          <Table.Table className='w-full'>
            <Table.TableHeader>
              <Table.TableRow className='border-none'>
                <Table.TableHead
                  className={cn(
                    tableHeadClass,
                    'rounded-s-full pl-6 text-left',
                  )}
                >
                  Image
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Destination
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Created By
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Trip Type
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Dates
                </Table.TableHead>
                <Table.TableHead
                  className={cn(tableHeadClass, 'rounded-e-full text-center')}
                >
                  Action
                </Table.TableHead>
              </Table.TableRow>
            </Table.TableHeader>
            <Table.TableBody>
              {trips.map(
                ({
                  _id,
                  images,
                  destination,
                  user,
                  tripType,
                  startDate,
                  endDate,
                }) => (
                  <Table.TableRow
                    className='cursor-pointer border-neutral-300'
                    key={_id}
                  >
                    <Table.TableCell>
                      <Image
                        style={{ height: 50, width: 50 }}
                        className='rounded-sm object-cover object-center'
                        src={images[0]}
                        width={50}
                        height={50}
                        alt={destination}
                      />
                    </Table.TableCell>
                    <Table.TableCell className='whitespace-nowrap'>
                      {destination}
                    </Table.TableCell>
                    <Table.TableCell className='whitespace-nowrap'>
                      {user.name}
                    </Table.TableCell>
                    <Table.TableCell className='whitespace-nowrap'>
                      {tripType}
                    </Table.TableCell>
                    <Table.TableCell className='whitespace-nowrap'>
                      Starts: {format(startDate, 'PPP')} <br />
                      Ends : {format(endDate, 'PPP')}
                    </Table.TableCell>
                    <Table.TableCell className='text-right'>
                      <div className='flex gap-3'>
                        <Link href={`/trip/${_id}`}>
                          <Button>Details</Button>
                        </Link>
                        <DeleteTrip tripId={_id} />
                      </div>
                    </Table.TableCell>
                  </Table.TableRow>
                ),
              )}
            </Table.TableBody>
          </Table.Table>
        </>
      ) : (
        <Message message='No Trips Found' />
      )}
    </div>
  );
};
