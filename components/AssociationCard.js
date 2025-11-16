'use client'

import { useState, useEffect } from 'react'

export default function AssociationCard({ association }) {
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
      {/* En-tête de l'association */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '12px' : '16px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '12px' : '0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: isMobile ? '12px' : '16px',
          width: isMobile ? '100%' : 'auto'
        }}>
          {/* Logo/Icone de l'association */}
          <div style={{
            width: isMobile ? '48px' : '60px',
            height: isMobile ? '48px' : '60px',
            backgroundColor: '#1A76B5',
            borderRadius: isMobile ? '8px' : '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: isMobile ? '18px' : '24px',
            fontWeight: 'bold',
            color: 'white',
            flexShrink: 0
          }}>
            {association.title.charAt(0)}
          </div>
          
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: isMobile ? '18px' : '22px',
              fontWeight: 'bold',
              color: '#1A76B5',
              margin: '0 0 6px 0',
              lineHeight: '1.3'
            }}>
              {association.title}
            </h3>
            <p style={{
              color: '#4A5568',
              fontSize: isMobile ? '13px' : '14px',
              margin: 0,
              lineHeight: '1.4'
            }}>
              {association.description}
            </p>
          </div>
        </div>
        
        {/* Badge type d'association */}
        <div style={{
          backgroundColor: '#E9F9FF',
          padding: isMobile ? '4px 8px' : '6px 12px',
          borderRadius: '16px',
          fontSize: isMobile ? '10px' : '12px',
          fontWeight: '600',
          color: '#1A76B5',
          whiteSpace: 'nowrap',
          alignSelf: isMobile ? 'flex-start' : 'auto'
        }}>
          Club Étudiant
        </div>
      </div>

      {/* Domaines d'activité */}
      {association.details && association.details.length > 0 && (
        <div style={{ 
          marginBottom: isMobile ? '16px' : '20px',
          paddingLeft: isMobile ? '0' : '76px'
        }}>
          <h4 style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#1A76B5',
              borderRadius: '50%'
            }}></span>
            Domaines d'Activité
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px'
          }}>
            {association.details.map((domaine, index) => (
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
                  gap: '4px'
                }}
              >
                <span style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#82D5F5',
                  borderRadius: '50%'
                }}></span>
                {domaine}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Cellules/Commissions */}
      {association.Cellules && association.Cellules.length > 0 && (
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
            gap: '6px'
          }}>
            <span style={{
              width: '4px',
              height: '4px',
              backgroundColor: '#1A76B5',
              borderRadius: '50%'
            }}></span>
            Cellules Spécialisées
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: isMobile ? '8px' : '12px'
          }}>
            {association.Cellules.map((cellule, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#E9F9FF',
                  padding: isMobile ? '10px 12px' : '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #82D5F5'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '6px' : '8px',
                  marginBottom: '2px'
                }}>
                  <div style={{
                    width: isMobile ? '14px' : '16px',
                    height: isMobile ? '14px' : '16px',
                    backgroundColor: '#1A76B5',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isMobile ? '8px' : '10px',
                    color: 'white',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {index + 1}
                  </div>
                  <span style={{
                    fontSize: isMobile ? '13px' : '14px',
                    fontWeight: '600',
                    color: '#1A76B5',
                    lineHeight: '1.3'
                  }}>
                    {cellule}
                  </span>
                </div>
                <p style={{
                  fontSize: isMobile ? '10px' : '12px',
                  color: '#4A5568',
                  margin: 0,
                  paddingLeft: isMobile ? '20px' : '24px',
                  lineHeight: '1.3'
                }}>
                  Groupe de travail spécialisé
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Liens et contacts */}
      <div style={{
        display: 'flex',
        gap: isMobile ? '12px' : '16px',
        paddingLeft: isMobile ? '0' : '76px',
        flexWrap: 'wrap',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Site Web Officiel */}
        {association.official_website && (
          <a
            href={association.official_website}
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
            Site Officiel
          </a>
        )}

        {/* Instagram */}
        {association.instagram && (
          <a
            href={association.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              backgroundColor: '#E1306C',
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
                e.target.style.backgroundColor = '#C13584'
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                e.target.style.backgroundColor = '#E1306C'
              }
            }}
          >
            <span>📷</span>
            Instagram
          </a>
        )}

        {/* Email officiel */}
        {association.official_mail && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: '#F7FAFC',
            color: '#4A5568',
            padding: isMobile ? '8px 16px' : '10px 20px',
            borderRadius: '8px',
            fontSize: isMobile ? '13px' : '14px',
            fontWeight: '400',
            border: '1px solid #E2E8F0',
            transition: 'all 0.2s ease',
            width: isMobile ? '100%' : 'auto',
            wordBreak: 'break-all'
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.backgroundColor = '#E9F9FF'
              e.target.style.borderColor = '#82D5F5'
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.backgroundColor = '#F7FAFC'
              e.target.style.borderColor = '#E2E8F0'
            }
          }}
          >
            <span>📧</span>
            {association.official_mail}
          </div>
        )}
      </div>

      {/* Footer informatif */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: isMobile ? '16px' : '20px',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: isMobile ? '0' : '76px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '8px' : '0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '8px' : '12px',
          fontSize: isMobile ? '10px' : '12px',
          color: '#718096',
          flexWrap: 'wrap'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              backgroundColor: '#82D5F5',
              borderRadius: '50%'
            }}></span>
            ESI Rabat
          </span>
          
          {association.Cellules && (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#82D5F5',
                borderRadius: '50%'
              }}></span>
              {association.Cellules.length} cellules
            </span>
          )}
        </div>
        
        <div style={{
          fontSize: isMobile ? '10px' : '12px',
          color: '#718096',
          fontWeight: '500',
          fontStyle: 'italic'
        }}>
          Association étudiante active
        </div>
      </div>
    </div>
  )
}