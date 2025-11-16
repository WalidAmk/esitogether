'use client'

import { useState, useEffect } from 'react'

export default function LogementCard({ logement }) {
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
      {/* En-tête */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '12px' : '16px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '8px' : '0'
      }}>
        <h3 style={{
          fontSize: isMobile ? '18px' : '20px',
          fontWeight: 'bold',
          color: '#1A76B5',
          margin: 0,
          flex: 1,
          lineHeight: '1.3'
        }}>
          {logement.title}
        </h3>
        
        {logement.prix && (
          <div style={{
            backgroundColor: '#E9F9FF',
            padding: isMobile ? '6px 12px' : '8px 16px',
            borderRadius: '20px',
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: '600',
            color: '#1A76B5',
            whiteSpace: 'nowrap',
            alignSelf: isMobile ? 'flex-start' : 'auto'
          }}>
            {logement.prix}
          </div>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: '#4A5568',
        lineHeight: '1.6',
        margin: '0 0 16px 0',
        fontSize: isMobile ? '14px' : '15px'
      }}>
        {logement.description}
      </p>

      {/* Détails */}
      {logement.details && logement.details.length > 0 && (
        <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
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
            Caractéristiques
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '6px' : '8px'
          }}>
            {logement.details.map((detail, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: isMobile ? '4px 8px' : '6px 12px',
                  borderRadius: '16px',
                  fontSize: isMobile ? '11px' : '13px',
                  color: '#4A5568',
                  border: '1px solid #E2E8F0'
                }}
              >
                {detail}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Informations de contact et liens */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: isMobile ? '12px' : '16px',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0'
      }}>
        {/* Contact */}
        {logement.contact && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px'
          }}>
            <div style={{
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '12px' : '14px',
              color: '#1A76B5',
              flexShrink: 0
            }}>
              📞
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Contact
              </div>
              <div style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#2D3748',
                fontWeight: '500',
                wordBreak: 'break-word'
              }}>
                {logement.contact}
              </div>
            </div>
          </div>
        )}

        {/* Lien site web */}
        {logement.lien && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px'
          }}>
            <div style={{
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '12px' : '14px',
              color: '#1A76B5',
              flexShrink: 0
            }}>
              🌐
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Site Web
              </div>
              <a
                href={logement.lien}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#1A76B5',
                  fontWeight: '500',
                  textDecoration: 'none',
                  wordBreak: 'break-word'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.textDecoration = 'underline'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.textDecoration = 'none'
                  }
                }}
              >
                Visiter le site
              </a>
            </div>
          </div>
        )}

        {/* Localisation */}
        {logement.localisation && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px'
          }}>
            <div style={{
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '12px' : '14px',
              color: '#1A76B5',
              flexShrink: 0
            }}>
              📍
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Localisation
              </div>
              <a
                href={logement.localisation}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#1A76B5',
                  fontWeight: '500',
                  textDecoration: 'none',
                  wordBreak: 'break-word'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.target.style.textDecoration = 'underline'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.target.style.textDecoration = 'none'
                  }
                }}
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}