import { Message } from '@/components/shared/Message';
import * as Table from '@/components/ui/table';
import { TUser } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ChangeRole } from './change-role';
import { ChangeStatus } from './change-status';

type TProps = {
  users: TUser[];
};

export const AdminUsers = ({ users }: TProps) => {
  const tableHeadClass = `bg-slate-100 text-center font-semibold uppercase whitespace-nowrap`;

  return (
    <div className='my-5 rounded-md bg-white p-5 shadow'>
      {users && users.length ? (
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
                  User
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Name
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass, 'text-left')}>
                  Email
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass)}>
                  Role
                </Table.TableHead>
                <Table.TableHead className={cn(tableHeadClass)}>
                  Status
                </Table.TableHead>
                <Table.TableHead
                  className={cn(tableHeadClass, 'rounded-e-full text-center')}
                >
                  Action
                </Table.TableHead>
              </Table.TableRow>
            </Table.TableHeader>
            <Table.TableBody>
              {users.map(({ _id, name, email, role, status }) => (
                <Table.TableRow
                  className='cursor-pointer border-neutral-300'
                  key={_id}
                >
                  <Table.TableCell>
                    <div className='flex size-10 items-center justify-center rounded-full bg-primary text-xl font-semibold text-white'>
                      {name[0]}
                    </div>
                  </Table.TableCell>
                  <Table.TableCell className='whitespace-nowrap'>
                    {name}
                  </Table.TableCell>
                  <Table.TableCell className='whitespace-nowrap'>
                    {email}
                  </Table.TableCell>
                  <Table.TableCell className='whitespace-nowrap text-center'>
                    {role}
                  </Table.TableCell>
                  <Table.TableCell className='whitespace-nowrap text-center'>
                    {status}
                  </Table.TableCell>
                  <Table.TableCell>
                    <div className='flex justify-center gap-3'>
                      <ChangeRole userId={_id} userRole={role} />
                      <ChangeStatus userId={_id} userStatus={status} />
                    </div>
                  </Table.TableCell>
                </Table.TableRow>
              ))}
            </Table.TableBody>
          </Table.Table>
        </>
      ) : (
        <Message message='No Trips Found' />
      )}
    </div>
  );
};
