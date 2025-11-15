'use client'


import Link from 'next/link'

export default function AuthButton() {
  const  isSignedIn  = true

  return (
    <Link 
      href={isSignedIn ? "/dashboard" : "/sign-in"}
      style={{ 
        backgroundColor: '#1A76B5',
        color: 'white',
        padding: '0.75rem 2rem',
        borderRadius: '0.5rem',
        fontWeight: '600',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#155a8a'
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#1A76B5'
      }}
    >
      {isSignedIn ? "Accéder au Dashboard" : "Se Connecter"}
    </Link>
  )
}