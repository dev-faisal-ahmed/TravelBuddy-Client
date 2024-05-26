import { fetchRequestMaker } from '@/lib/utils/fetchRequestMaker';
import { AdminUsers } from '@/components/pages/admin/users';
import { apiUrl } from '@/lib/data/apiUrl';
import { tags } from '@/lib/data/tags';
import { TUser } from '@/lib/types';

const getAllUsers = async () => {
  const response = await fetch(fetchRequestMaker(apiUrl.admin.users), {
    cache: 'no-store',
    next: { tags: [tags.adminUsers] },
  });

  const users = await response.json();
  return users?.data as TUser[];
};

export default async function AdminUsersPage() {
  const users = await getAllUsers();
  return <AdminUsers users={users} />;
}
