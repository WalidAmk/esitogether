'use client'

import { useState, useEffect } from 'react'

export default function EvenementCard({ evenement }) {
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

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    return dateString
  }

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: isMobile ? '16px' : '24px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      marginBottom: isMobile ? '16px' : '20px',
      position: 'relative'
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
      {/* Badge de date */}
      <div style={{
        position: isMobile ? 'static' : 'absolute',
        top: isMobile ? 'auto' : '20px',
        right: isMobile ? 'auto' : '20px',
        backgroundColor: '#E9F9FF',
        padding: isMobile ? '6px 12px' : '8px 16px',
        borderRadius: '20px',
        fontSize: isMobile ? '12px' : '14px',
        fontWeight: '600',
        color: '#1A76B5',
        border: '1px solid #82D5F5',
        marginBottom: isMobile ? '12px' : '0',
        width: isMobile ? 'fit-content' : 'auto',
        alignSelf: isMobile ? 'flex-start' : 'auto'
      }}>
        {formatDate(evenement.date)}
      </div>

      {/* En-tête de l'événement */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: isMobile ? '12px' : '16px',
        marginBottom: isMobile ? '12px' : '16px',
        paddingRight: isMobile ? '0' : '120px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Icône événement */}
        <div style={{
          width: isMobile ? '48px' : '60px',
          height: isMobile ? '48px' : '60px',
          backgroundColor: '#1A76B5',
          borderRadius: isMobile ? '8px' : '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: isMobile ? '18px' : '24px',
          color: 'white',
          flexShrink: 0
        }}>
          🎊
        </div>
        
        <div style={{ 
          flex: 1,
          width: isMobile ? '100%' : 'auto'
        }}>
          <h3 style={{
            fontSize: isMobile ? '18px' : '22px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 6px 0',
            lineHeight: '1.3'
          }}>
            {evenement.title}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: isMobile ? '14px' : '15px',
            margin: 0,
            lineHeight: '1.4'
          }}>
            {evenement.description}
          </p>
        </div>
      </div>

      {/* Informations lieu et date */}
      <div style={{
        display: 'flex',
        gap: isMobile ? '16px' : '24px',
        marginBottom: isMobile ? '16px' : '20px',
        paddingLeft: isMobile ? '0' : '76px',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Lieu */}
        {evenement.lieu && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px',
            flex: isMobile ? '1' : '0 1 auto'
          }}>
            <div style={{
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '14px' : '16px',
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
                Lieu
              </div>
              <div style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#2D3748',
                fontWeight: '600',
                wordBreak: 'break-word'
              }}>
                {evenement.lieu}
              </div>
            </div>
          </div>
        )}

        {/* Date */}
        {evenement.date && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '6px' : '8px',
            flex: isMobile ? '1' : '0 1 auto'
          }}>
            <div style={{
              width: isMobile ? '28px' : '32px',
              height: isMobile ? '28px' : '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? '14px' : '16px',
              color: '#1A76B5',
              flexShrink: 0
            }}>
              📅
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: isMobile ? '11px' : '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Date
              </div>
              <div style={{
                fontSize: isMobile ? '13px' : '14px',
                color: '#2D3748',
                fontWeight: '600'
              }}>
                {formatDate(evenement.date)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Activités/Détails */}
      {evenement.details && evenement.details.length > 0 && (
        <div style={{ 
          marginBottom: isMobile ? '20px' : '24px',
          paddingLeft: isMobile ? '0' : '76px'
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
            Activités Prévenues
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '8px' : '12px'
          }}>
            {evenement.details.map((activite, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: isMobile ? '10px 12px' : '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '6px' : '8px'
                }}
              >
                <div style={{
                  width: isMobile ? '18px' : '20px',
                  height: isMobile ? '18px' : '20px',
                  backgroundColor: '#82D5F5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '9px' : '10px',
                  color: 'white',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>
                  {index + 1}
                </div>
                <span style={{
                  fontSize: isMobile ? '13px' : '14px',
                  fontWeight: '500',
                  color: '#4A5568',
                  lineHeight: '1.3'
                }}>
                  {activite}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: isMobile ? '0' : '76px',
        flexWrap: 'wrap',
        gap: isMobile ? '8px' : '12px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Bouton principal */}
        <div style={{
          display: 'flex',
          gap: isMobile ? '8px' : '12px',
          flexWrap: 'wrap',
          width: isMobile ? '100%' : 'auto'
        }}>
          {/* Lien vers plus d'informations */}
          {evenement.lien && (
            <a
              href={evenement.lien}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                backgroundColor: '#1A76B5',
                color: 'white',
                padding: isMobile ? '8px 16px' : '10px 20px',
                borderRadius: '8px',
                fontSize: isMobile ? '13px' : '14px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
                width: isMobile ? '100%' : 'auto',
                flex: isMobile ? '1' : '0 1 auto'
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
              <span>ℹ️</span>
              Plus d'informations
            </a>
          )}
        </div>

        {/* Statut de l'événement */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: isMobile ? '11px' : '12px',
          color: '#718096',
          fontWeight: '500',
          alignSelf: isMobile ? 'flex-start' : 'center'
        }}>
          <span style={{
            width: '6px',
            height: '6px',
            backgroundColor: '#82D5F5',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></span>
          Événement à venir
        </div>
      </div>

      {/* Style pour l'animation de pulse */}
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}