'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AutoFormationCard({ formation }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
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
        e.target.style.transform = 'translateY(-2px)'
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.target.style.transform = 'translateY(0)'
      }
    }}
    >
      {/* En-tête du domaine */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: isMobile ? '16px' : '20px',
        flexWrap: 'wrap',
        gap: isMobile ? '12px' : '16px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        <div style={{ 
          flex: 1, 
          minWidth: isMobile ? 'auto' : '250px',
          width: isMobile ? '100%' : 'auto'
        }}>
          <h3 style={{
            fontSize: isMobile ? '18px' : '22px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 6px 0',
            lineHeight: '1.3'
          }}>
            {formation.domaine}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: isMobile ? '14px' : '15px',
            margin: '0 0 10px 0',
            lineHeight: '1.5'
          }}>
            {formation.description}
          </p>
          
          {/* Métadonnées */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '12px' : '16px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: isMobile ? '12px' : '13px',
              color: '#718096'
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                backgroundColor: '#82D5F5',
                borderRadius: '50%'
              }}></span>
              Niveau: <strong style={{ color: '#4A5568' }}>{formation.niveau}</strong>
            </div>
          </div>
        </div>
        
        {/* Bouton de téléchargement */}
        <a
          href={formation.downloadLink}
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: '#1A76B5',
            color: 'white',
            padding: isMobile ? '10px 16px' : '12px 20px',
            borderRadius: '8px',
            fontSize: isMobile ? '13px' : '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            height: 'fit-content',
            width: isMobile ? '100%' : 'auto'
          }}
          onMouseEnter={(e) => {
            if (!isMobile) {
              e.target.style.backgroundColor = '#155a8a'
              e.target.style.transform = 'translateY(-1px)'
            }
          }}
          onMouseLeave={(e) => {
            if (!isMobile) {
              e.target.style.backgroundColor = '#1A76B5'
              e.target.style.transform = 'translateY(0)'
            }
          }}
        >
          <span>📥</span>
          Télécharger PDF
        </a>
      </div>

      {/* Technologies */}
      {formation.technologies && formation.technologies.length > 0 && (
        <div style={{ marginBottom: isMobile ? '16px' : '20px' }}>
          <h4 style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 8px 0'
          }}>
            Technologies couvertes :
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: isMobile ? '6px' : '8px'
          }}>
            {formation.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#E9F9FF',
                  padding: isMobile ? '4px 8px' : '6px 12px',
                  borderRadius: '16px',
                  fontSize: isMobile ? '11px' : '13px',
                  color: '#1A76B5',
                  fontWeight: '500',
                  border: '1px solid #82D5F5'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Image de la roadmap */}
      <div style={{
        marginTop: isMobile ? '16px' : '20px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #E2E8F0',
        backgroundColor: '#F7FAFC',
        minHeight: isMobile ? '150px' : '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {!imageLoaded && !imageError && (
          <div style={{
            padding: isMobile ? '20px' : '40px',
            textAlign: 'center',
            color: '#718096'
          }}>
            <div style={{ 
              fontSize: isMobile ? '18px' : '24px', 
              marginBottom: isMobile ? '4px' : '8px' 
            }}>
              🔄
            </div>
            <div style={{ fontSize: isMobile ? '12px' : '14px' }}>
              Chargement de la roadmap...
            </div>
          </div>
        )}
        
        {imageError ? (
          <div style={{
            padding: isMobile ? '20px' : '40px',
            textAlign: 'center',
            color: '#718096'
          }}>
            <div style={{ 
              fontSize: isMobile ? '18px' : '24px', 
              marginBottom: isMobile ? '4px' : '8px' 
            }}>
              ❌
            </div>
            <div style={{ fontSize: isMobile ? '12px' : '14px' }}>
              Roadmap non disponible
            </div>
          </div>
        ) : (
          <Image
            src={formation.roadmapImage}
            alt={`Roadmap ${formation.domaine}`}
            width={800}
            height={400}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: isMobile ? '300px' : '400px',
              objectFit: 'contain',
              display: imageLoaded ? 'block' : 'none'
            }}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}
      </div>

      {/* Actions supplémentaires */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: isMobile ? '16px' : '20px',
        paddingTop: isMobile ? '12px' : '16px',
        borderTop: '1px solid #E2E8F0',
        flexWrap: 'wrap',
        gap: isMobile ? '8px' : '12px',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '8px' : '12px',
          fontSize: isMobile ? '11px' : '13px',
          color: '#718096'
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
            Roadmap {formation.domaine.toLowerCase()}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: isMobile ? '8px' : '12px',
          flexWrap: 'wrap'
        }}>
          {/* Vous pouvez ajouter d'autres boutons d'action ici si nécessaire */}
        </div>
      </div>
    </div>
  )
}