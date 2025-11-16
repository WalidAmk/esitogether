'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import AuthButton from '../components/AuthButton'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #E9F9FF', 
        padding: isMobile ? '0.75rem 0' : '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1.5rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Votre Logo */}
              <Image 
                src={logo}
                alt="ESITogether" 
                style={{
                  height: isMobile ? '40px' : '60px',
                  width: 'auto'
                }}
              />
            </div>
            
            {/* Menu Desktop */}
            {!isMobile && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link 
                  href="/sign-in" 
                  style={{ 
                    color: '#1A76B5', 
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = '#155a8a'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#1A76B5'
                  }}
                >
                  Connexion
                </Link>
                <Link 
                  href="/sign-up" 
                  style={{ 
                    backgroundColor: '#1A76B5',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '0.5rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#155a8a'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1A76B5'
                  }}
                >
                  S'inscrire
                </Link>
              </div>
            )}

            {/* Menu Mobile Hamburger */}
            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#E9F9FF',
                  border: '1px solid #82D5F5',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  color: '#1A76B5'
                }}
              >
                {menuOpen ? '✕' : '☰'}
              </button>
            )}
          </div>

          {/* Menu Mobile Dropdown */}
          {isMobile && menuOpen && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderBottom: '1px solid #E9F9FF',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              padding: '1rem'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                <Link 
                  href="/sign-in" 
                  style={{ 
                    color: '#1A76B5', 
                    fontWeight: '500',
                    textDecoration: 'none',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    transition: 'background-color 0.2s ease'
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#E9F9FF'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent'
                  }}
                >
                  Connexion
                </Link>
                <Link 
                  href="/sign-up" 
                  style={{ 
                    backgroundColor: '#1A76B5',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'background-color 0.2s ease'
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#155a8a'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#1A76B5'
                  }}
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #E9F9FF 0%, white 100%)',
        padding: isMobile ? '3rem 0' : '5rem 0'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1.5rem' 
        }}>
          <div style={{ 
            maxWidth: '56rem', 
            margin: '0 auto', 
            textAlign: 'center' 
          }}>
            <h1 style={{ 
              fontSize: isMobile ? '2rem' : '3rem', 
              fontWeight: 'bold', 
              color: '#1A76B5',
              marginBottom: isMobile ? '1rem' : '1.5rem',
              lineHeight: '1.2'
            }}>
              Votre Compagnon de Vie Estudiantine
            </h1>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.25rem', 
              color: '#4B5563',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              lineHeight: '1.6'
            }}>
              La plateforme essentielle créée par les étudiants, pour les étudiants. 
              Toutes les ressources nécessaires pour réussir votre parcours académique.
            </p>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <AuthButton />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ 
        padding: isMobile ? '3rem 0' : '5rem 0', 
        backgroundColor: 'white' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1.5rem' 
        }}>
          <div style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '2rem' : '4rem' 
          }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.5rem' : '1.875rem', 
              fontWeight: 'bold', 
              color: '#1A76B5', 
              marginBottom: '1rem' 
            }}>
              Services Complets pour les Étudiants
            </h2>
            <p style={{ 
              color: '#6B7280', 
              maxWidth: '32rem', 
              margin: '0 auto',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Une plateforme centralisée regroupant tous les outils essentiels 
              pour faciliter votre intégration et votre réussite académique.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {/* Housing & Dorms */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
            >
              <div style={{ 
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ 
                  width: isMobile ? '1.5rem' : '2rem', 
                  height: isMobile ? '1.5rem' : '2rem', 
                  color: 'white' 
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.25rem', 
                fontWeight: '600', 
                color: '#1A76B5', 
                marginBottom: '0.75rem' 
              }}>
                Logement & Résidences
              </h3>
              <p style={{ 
                color: '#6B7280', 
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '1rem',
                marginBottom: '1rem'
              }}>
                Guide complet des résidences universitaires, colocations vérifiées et solutions de logement près du campus.
              </p>
              <ul style={{ 
                color: '#6B7280', 
                textAlign: 'left', 
                marginTop: '1rem', 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                lineHeight: '1.5',
                paddingLeft: '1rem'
              }}>
                <li>• Résidences universitaires</li>
                <li>• Colocations étudiantes</li>
                <li>• Conseils logement</li>
              </ul>
            </div>

            {/* Academic Resources */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
            >
              <div style={{ 
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ 
                  width: isMobile ? '1.5rem' : '2rem', 
                  height: isMobile ? '1.5rem' : '2rem', 
                  color: 'white' 
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.25rem', 
                fontWeight: '600', 
                color: '#1A76B5', 
                marginBottom: '0.75rem' 
              }}>
                Ressources Académiques
              </h3>
              <p style={{ 
                color: '#6B7280', 
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '1rem',
                marginBottom: '1rem'
              }}>
                Accédez aux bibliothèques, outils numériques, tutoriels et ressources pédagogiques essentielles.
              </p>
              <ul style={{ 
                color: '#6B7280', 
                textAlign: 'left', 
                marginTop: '1rem', 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                lineHeight: '1.5',
                paddingLeft: '1rem'
              }}>
                <li>• Bibliothèques & horaires</li>
                <li>• Outils numériques</li>
                <li>• Tutoriels & guides</li>
              </ul>
            </div>

            {/* Transportation */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
            >
              <div style={{ 
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ 
                  width: isMobile ? '1.5rem' : '2rem', 
                  height: isMobile ? '1.5rem' : '2rem', 
                  color: 'white' 
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.25rem', 
                fontWeight: '600', 
                color: '#1A76B5', 
                marginBottom: '0.75rem' 
              }}>
                Transport & Mobilité
              </h3>
              <p style={{ 
                color: '#6B7280', 
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '1rem',
                marginBottom: '1rem'
              }}>
                Solutions de transport optimisées, horaires des navettes et informations sur les abonnements étudiants.
              </p>
              <ul style={{ 
                color: '#6B7280', 
                textAlign: 'left', 
                marginTop: '1rem', 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                lineHeight: '1.5',
                paddingLeft: '1rem'
              }}>
                <li>• Transports en commun</li>
                <li>• Navettes campus</li>
                <li>• Abonnements étudiants</li>
              </ul>
            </div>

            {/* Student Life */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(-4px)'
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = 'none'
              }
            }}
            >
              <div style={{ 
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <svg style={{ 
                  width: isMobile ? '1.5rem' : '2rem', 
                  height: isMobile ? '1.5rem' : '2rem', 
                  color: 'white' 
                }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ 
                fontSize: isMobile ? '1.125rem' : '1.25rem', 
                fontWeight: '600', 
                color: '#1A76B5', 
                marginBottom: '0.75rem' 
              }}>
                Vie Étudiante
              </h3>
              <p style={{ 
                color: '#6B7280', 
                lineHeight: '1.6',
                fontSize: isMobile ? '0.9rem' : '1rem',
                marginBottom: '1rem'
              }}>
                Découvrez les associations, événements culturels, sports et activités pour une vie campus enrichissante.
              </p>
              <ul style={{ 
                color: '#6B7280', 
                textAlign: 'left', 
                marginTop: '1rem', 
                fontSize: isMobile ? '0.8rem' : '0.9rem', 
                lineHeight: '1.5',
                paddingLeft: '1rem'
              }}>
                <li>• Associations étudiantes</li>
                <li>• Événements culturels</li>
                <li>• Sports & loisirs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#1F2937', 
        color: 'white', 
        padding: isMobile ? '2rem 0' : '3rem 0' 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: isMobile ? '0 1rem' : '0 1.5rem' 
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Image 
                src={logo}
                alt="ESITogether" 
                style={{
                  height: isMobile ? '40px' : '60px',
                  width: 'auto'
                }}
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                color: '#9CA3AF',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                Plateforme étudiante ESI - Projet académique
              </p>
              <p style={{ 
                color: '#6B7280', 
                fontSize: isMobile ? '0.75rem' : '0.875rem', 
                marginTop: '0.5rem' 
              }}>
                © 2025 ESITogether. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}