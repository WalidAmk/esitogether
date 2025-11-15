
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {


  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
      fontFamily: 'Arial, sans-serif'
    }}>
      {children}
    </div>
  )
}