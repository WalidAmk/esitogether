'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AutoFormationCard({ formation }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      marginBottom: '20px'
    }}
    >
      {/* En-tête du domaine */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 8px 0'
          }}>
            {formation.domaine}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: '15px',
            margin: '0 0 12px 0',
            lineHeight: '1.5'
          }}>
            {formation.description}
          </p>
          
          {/* Métadonnées */}
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              color: '#718096'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
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
            gap: '8px',
            backgroundColor: '#1A76B5',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            height: 'fit-content'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#155a8a'
            e.target.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#1A76B5'
            e.target.style.transform = 'translateY(0)'
          }}
        >
          <span>📥</span>
          Télécharger PDF
        </a>
      </div>

      {/* Technologies */}
      {formation.technologies && formation.technologies.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 12px 0'
          }}>
            Technologies couvertes :
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {formation.technologies.map((tech, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#E9F9FF',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '13px',
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
        marginTop: '20px',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #E2E8F0',
        backgroundColor: '#F7FAFC',
        minHeight: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        {!imageLoaded && !imageError && (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            color: '#718096'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔄</div>
            Chargement de la roadmap...
          </div>
        )}
        
        {imageError ? (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            color: '#718096'
          }}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>❌</div>
            Roadmap non disponible
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
              maxHeight: '400px',
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
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '13px',
          color: '#718096'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#82D5F5',
              borderRadius: '50%'
            }}></span>
            Roadmap {formation.domaine.toLowerCase()}
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
         
        </div>
      </div>
    </div>
  )
}