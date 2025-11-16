'use client'

import { useState } from 'react'

export default function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      backgroundColor: 'white',
      marginBottom: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}
    >
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '20px 24px',
          backgroundColor: isOpen ? '#E9F9FF' : 'white',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px',
          transition: 'background-color 0.2s ease'
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '8px'
          }}>
            <span style={{
              backgroundColor: '#1A76B5',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase'
            }}>
              {faq.categorie}
            </span>
          </div>
          
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#1A2937',
            margin: 0,
            lineHeight: '1.4'
          }}>
            {faq.question}
          </h3>
        </div>
        
        {/* Icône flèche */}
        <div style={{
          width: '24px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1A76B5',
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          flexShrink: 0
        }}>
          ▼
        </div>
      </button>

      {/* Réponse */}
      {isOpen && (
        <div style={{
          padding: '0 24px 20px 24px',
          borderTop: '1px solid #E2E8F0'
        }}>
          <p style={{
            color: '#4A5568',
            lineHeight: '1.6',
            margin: '16px 0 0 0',
            fontSize: '15px'
          }}>
            {faq.reponse}
          </p>
        </div>
      )}
    </div>
  )
}