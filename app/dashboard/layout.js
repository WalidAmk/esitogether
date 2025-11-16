import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Analytics } from "@vercel/analytics/next"

export default async function DashboardLayout({ children }) {

  const { userId } = await auth()
  
  // Rediriger vers la page de connexion si non authentifié
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
      fontFamily: 'Arial, sans-serif'
    }}>
      {children}
      <Analytics />
    </div>
  )
}