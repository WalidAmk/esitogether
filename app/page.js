import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import AuthButton from '../components/AuthButton'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'white', borderBottom: '1px solid #E9F9FF', padding: '1rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Votre Logo */}
              <Image 
                src={logo}
                alt="ESITogether" 
                className='h-[60px] w-auto'
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link 
                href="/sign-in" 
                style={{ 
                  color: '#1A76B5', 
                  fontWeight: '500',
                  textDecoration: 'none'
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
                  textDecoration: 'none'
                }}
              >
                S inscrire
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #E9F9FF 0%, white 100%)',
        padding: '5rem 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#1A76B5',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Votre Compagnon de Vie Estudiantine
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#4B5563',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              La plateforme essentielle créée par les étudiants, pour les étudiants. 
              Toutes les ressources nécessaires pour réussir votre parcours académique.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <AuthButton />
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '5rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1A76B5', marginBottom: '1rem' }}>
              Services Complets pour les Étudiants
            </h2>
            <p style={{ color: '#6B7280', maxWidth: '32rem', margin: '0 auto' }}>
              Une plateforme centralisée regroupant tous les outils essentiels 
              pour faciliter votre intégration et votre réussite académique.
            </p>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Housing & Dorms */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1A76B5', marginBottom: '1rem' }}>
                Logement & Résidences
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Guide complet des résidences universitaires, colocations vérifiées et solutions de logement près du campus.
              </p>
              <ul style={{ color: '#6B7280', textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                <li>• Résidences universitaires</li>
                <li>• Colocations étudiantes</li>
                <li>• Conseils logement</li>
              </ul>
            </div>

            {/* Academic Resources */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1A76B5', marginBottom: '1rem' }}>
                Ressources Académiques
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Accédez aux bibliothèques, outils numériques, tutoriels et ressources pédagogiques essentielles.
              </p>
              <ul style={{ color: '#6B7280', textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                <li>• Bibliothèques & horaires</li>
                <li>• Outils numériques</li>
                <li>• Tutoriels & guides</li>
              </ul>
            </div>

            {/* Transportation */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1A76B5', marginBottom: '1rem' }}>
                Transport & Mobilité
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Solutions de transport optimisées, horaires des navettes et informations sur les abonnements étudiants.
              </p>
              <ul style={{ color: '#6B7280', textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                <li>• Transports en commun</li>
                <li>• Navettes campus</li>
                <li>• Abonnements étudiants</li>
              </ul>
            </div>

            {/* Student Life */}
            <div style={{ 
              backgroundColor: '#E9F9FF',
              borderRadius: '0.75rem',
              padding: '2rem',
              textAlign: 'center',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}>
              <div style={{ 
                width: '4rem',
                height: '4rem',
                backgroundColor: '#1A76B5',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <svg style={{ width: '2rem', height: '2rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1A76B5', marginBottom: '1rem' }}>
                Vie Étudiante
              </h3>
              <p style={{ color: '#6B7280', lineHeight: '1.6' }}>
                Découvrez les associations, événements culturels, sports et activités pour une vie campus enrichissante.
              </p>
              <ul style={{ color: '#6B7280', textAlign: 'left', marginTop: '1rem', fontSize: '0.9rem', lineHeight: '1.5' }}>
                <li>• Associations étudiantes</li>
                <li>• Événements culturels</li>
                <li>• Sports & loisirs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1F2937', color: 'white', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
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
                className='h-[60px] w-auto'
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#9CA3AF' }}>Plateforme étudiante ESI - Projet académique</p>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                © 2024 ESITogether. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}