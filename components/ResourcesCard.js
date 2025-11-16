'use client'

import { useState, useEffect } from 'react'

export default function ResourcesCard({ resource }) {
  const [isMobile, setIsMobile] = useState(false)

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: isMobile ? '16px' : '24px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      marginBottom: isMobile ? '16px' : '20px'
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)'
        e.target.style.transform = 'translateY(-2px)'
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)'
        e.target.style.transform = 'translateY(0)'
      }
    }}
    >
      {/* En-tête de la filière */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '16px' : '20px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '8px' : '0'
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: isMobile ? '18px' : '20px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 6px 0',
            lineHeight: '1.3'
          }}>
            {resource.filiere}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: isMobile ? '13px' : '14px',
            margin: 0,
            lineHeight: '1.4'
          }}>
            {resource.description}
          </p>
        </div>
        
        {/* Badge nombre de semestres */}
        <div style={{
          backgroundColor: '#E9F9FF',
          padding: isMobile ? '4px 8px' : '6px 12px',
          borderRadius: '16px',
          fontSize: isMobile ? '11px' : '12px',
          fontWeight: '600',
          color: '#1A76B5',
          alignSelf: isMobile ? 'flex-start' : 'auto'
        }}>
          {resource.semestres.length} {resource.semestres.length > 1 ? 'semestres' : 'semestre'}
        </div>
      </div>

      {/* Liste des semestres */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: isMobile ? '8px' : '12px'
      }}>
        {resource.semestres.map((semestre, index) => (
          <a
            key={index}
            href={semestre.lien}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '12px 8px' : '16px 12px',
              backgroundColor: '#F7FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              textAlign: 'center',
              minHeight: isMobile ? '80px' : 'auto'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.backgroundColor = '#E9F9FF'
                e.target.style.borderColor = '#82D5F5'
                e.target.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.backgroundColor = '#F7FAFC'
                e.target.style.borderColor = '#E2E8F0'
                e.target.style.transform = 'translateY(0)'
              }
            }}
          >
            <div style={{
              width: isMobile ? '32px' : '40px',
              height: isMobile ? '32px' : '40px',
              backgroundColor: '#1A76B5',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: isMobile ? '6px' : '8px',
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 'bold',
              color: 'white',
              flexShrink: 0
            }}>
              {semestre.semestre.includes('Année') ? '📊' : '📁'}
            </div>
            
            <span style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: '600',
              color: '#2D3748',
              marginBottom: '2px',
              lineHeight: '1.2',
              wordBreak: 'break-word'
            }}>
              {semestre.semestre}
            </span>
            
            <span style={{
              fontSize: isMobile ? '10px' : '11px',
              color: '#718096',
              fontWeight: '500'
            }}>
              Accéder
            </span>
          </a>
        ))}
      </div>

      {/* Footer avec informations supplémentaires */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: isMobile ? '16px' : '20px',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '8px' : '0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '6px' : '8px',
          fontSize: isMobile ? '11px' : '12px',
          color: '#718096'
        }}>
          <span style={{
            width: isMobile ? '6px' : '8px',
            height: isMobile ? '6px' : '8px',
            backgroundColor: '#82D5F5',
            borderRadius: '50%'
          }}></span>
          Google Drive
        </div>
        
        <div style={{
          fontSize: isMobile ? '11px' : '12px',
          color: '#718096',
          fontWeight: '500',
          textAlign: isMobile ? 'center' : 'right'
        }}>
          {resource.filiere.includes('RAPPORTS') ? 'Rapports de stage' : 'Cours et ressources'}
        </div>
      </div>
    </div>
  )
}