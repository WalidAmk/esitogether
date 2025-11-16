'use client'

import { useState, useEffect } from 'react'

export default function TransportCard({ transport }) {
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
      {/* En-tête avec type de transport */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '12px' : '16px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '8px' : '0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '8px' : '12px',
          width: isMobile ? '100%' : 'auto'
        }}>
          <div style={{
            width: isMobile ? '40px' : '48px',
            height: isMobile ? '40px' : '48px',
            backgroundColor: '#E9F9FF',
            borderRadius: isMobile ? '8px' : '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '16px' : '20px',
            color: '#1A76B5',
            flexShrink: 0
          }}>
            {transport.title === 'Bus' && '🚌'}
            {transport.title === 'Tramway' && '🚊'}
            {transport.title === 'Train' && '🚆'}
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 'bold',
              color: '#1A76B5',
              margin: '0 0 2px 0',
              lineHeight: '1.3'
            }}>
              {transport.title}
            </h3>
            <p style={{
              fontSize: isMobile ? '12px' : '14px',
              color: '#718096',
              margin: 0
            }}>
              Transport {transport.title.toLowerCase()}
            </p>
          </div>
        </div>
        
        {transport.prix && (
          <div style={{
            backgroundColor: '#E9F9FF',
            padding: isMobile ? '6px 12px' : '8px 16px',
            borderRadius: '20px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '600',
            color: '#1A76B5',
            textAlign: 'center',
            alignSelf: isMobile ? 'flex-start' : 'auto'
          }}>
            {transport.prix}
          </div>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: '#4A5568',
        lineHeight: '1.6',
        margin: '0 0 16px 0',
        fontSize: isMobile ? '14px' : '15px',
        paddingLeft: isMobile ? '0' : '60px'
      }}>
        {transport.description}
      </p>

      {/* Lignes directes */}
      {transport['Lignes direct'] && transport['Lignes direct'].length > 0 && (
        <div style={{ 
          marginBottom: isMobile ? '16px' : '20px',
          paddingLeft: isMobile ? '0' : '60px'
        }}>
          <h4 style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px'
          }}>
            <span style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#1A76B5',
              borderRadius: '50%'
            }}></span>
            Lignes Directes
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '6px' : '8px'
          }}>
            {transport['Lignes direct'].map((ligne, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#1A76B5',
                  color: 'white',
                  padding: isMobile ? '4px 8px' : '6px 12px',
                  borderRadius: '16px',
                  fontSize: isMobile ? '11px' : '13px',
                  fontWeight: '600',
                  border: '1px solid #1A76B5'
                }}
              >
                {ligne}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Arrêts */}
      {transport.arrets && transport.arrets.length > 0 && (
        <div style={{ 
          marginBottom: isMobile ? '16px' : '20px',
          paddingLeft: isMobile ? '0' : '60px'
        }}>
          <h4 style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px'
          }}>
            <span style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#1A76B5',
              borderRadius: '50%'
            }}></span>
            Arrêts Principaux
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '6px' : '8px'
          }}>
            {transport.arrets.map((arret, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: isMobile ? '4px 8px' : '6px 12px',
                  borderRadius: '16px',
                  fontSize: isMobile ? '11px' : '13px',
                  color: '#4A5568',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '4px' : '6px'
                }}
              >
                <span style={{
                  width: isMobile ? '4px' : '6px',
                  height: isMobile ? '4px' : '6px',
                  backgroundColor: '#82D5F5',
                  borderRadius: '50%'
                }}></span>
                {arret}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Lien et informations supplémentaires */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: isMobile ? '0' : '60px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '0'
      }}>
        {/* Lien site web */}
        {transport.lien && (
          <a
            href={transport.lien}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isMobile ? '6px' : '8px',
              backgroundColor: '#1A76B5',
              color: 'white',
              padding: isMobile ? '8px 16px' : '10px 20px',
              borderRadius: '8px',
              fontSize: isMobile ? '13px' : '14px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={(e) => {
              if (!isMobile) {
                e.target.style.backgroundColor = '#155a8a'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.backgroundColor = '#1A76B5'
              }
            }}
          >
            <span>🌐</span>
            Plus d'informations
          </a>
        )}

        {/* Indicateur de type */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '6px' : '8px',
          fontSize: isMobile ? '12px' : '13px',
          color: '#718096',
          alignSelf: isMobile ? 'flex-start' : 'center'
        }}>
          <span style={{
            width: isMobile ? '6px' : '8px',
            height: isMobile ? '6px' : '8px',
            backgroundColor: '#82D5F5',
            borderRadius: '50%'
          }}></span>
          Transport {transport.title.toLowerCase()}
        </div>
      </div>
    </div>
  )
}