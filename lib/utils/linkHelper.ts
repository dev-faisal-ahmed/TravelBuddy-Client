const title: Record<string, string> = {
  '/admin/trips': 'Trips',
  '/admin/users': 'Users',
};

export function generateTitle(url: string) {
  let pageTitle = title[url];
  if (pageTitle) return pageTitle;
}
