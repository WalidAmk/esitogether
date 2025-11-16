'use client'

import { useState, useEffect } from 'react'

export default function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false)
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
      backgroundColor: 'white',
      marginBottom: isMobile ? '12px' : '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      if (!isMobile) {
        e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)'
      }
    }}
    onMouseLeave={(e) => {
      if (!isMobile) {
        e.target.style.boxShadow = 'none'
      }
    }}
    >
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: isMobile ? '16px' : '20px 24px',
          backgroundColor: isOpen ? '#E9F9FF' : 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: isMobile ? '12px' : '16px',
          transition: 'background-color 0.2s ease'
        }}
      >
        <div style={{ 
          flex: 1,
          minWidth: 0 // Permet au texte de se comporter correctement
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '8px' : '12px',
            marginBottom: isMobile ? '6px' : '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              backgroundColor: '#1A76B5',
              color: 'white',
              padding: isMobile ? '3px 6px' : '4px 8px',
              borderRadius: '6px',
              fontSize: isMobile ? '10px' : '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              lineHeight: '1.2'
            }}>
              {faq.categorie}
            </span>
          </div>
          
          <h3 style={{
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '600',
            color: '#1A2937',
            margin: 0,
            lineHeight: '1.4',
            wordBreak: 'break-word'
          }}>
            {faq.question}
          </h3>
        </div>
        
        {/* Icône flèche */}
        <div style={{
          width: isMobile ? '20px' : '24px',
          height: isMobile ? '20px' : '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1A76B5',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          flexShrink: 0,
          marginTop: isMobile ? '2px' : '0'
        }}>
          ▼
        </div>
      </button>

      {/* Réponse */}
      {isOpen && (
        <div style={{
          padding: isMobile ? '0 16px 16px 16px' : '0 24px 20px 24px',
          borderTop: '1px solid #E2E8F0'
        }}>
          <p style={{
            color: '#4A5568',
            lineHeight: '1.6',
            margin: isMobile ? '12px 0 0 0' : '16px 0 0 0',
            fontSize: isMobile ? '14px' : '15px',
            wordBreak: 'break-word'
          }}>
            {faq.reponse}
          </p>
        </div>
      )}
    </div>
  )
}