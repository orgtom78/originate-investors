import { getCurrentUser } from 'aws-amplify/auth/server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation'
import { runWithAmplifyServerContext } from '@/utils/amplifyServerUtils';
// Type Imports
import type { ChildrenType } from '@core/types'
// Component Imports
import AuthRedirect from '@components/AuthRedirect'

export default  async function AuthGuard({ children }: ChildrenType ) {
    try {
  const user = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec)
  });

  return <>{NextResponse.json({ user }) ? children : <AuthRedirect />}</>;
} catch (error) {
    console.error(error);
    return redirect(`/register`);
  }
}