import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import LoginForm from '@/components/auth/LoginForm'

export default async function LoginPage() {
  const session = await getSession()
  
  if (session) {
    redirect('/explore')
  }

  return <LoginForm />
}