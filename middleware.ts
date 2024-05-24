import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const privateRoutes = ['/trip'];
const authRoutes = ['/login', '/register'];

export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const token = cookies().get('token')?.value;

  if (!token && privateRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (token && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }
};

export const config = {
  matcher: ['/login', '/register', '/trip'],
};
