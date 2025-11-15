'use client'

export default function LogementCard({ logement }) {
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
      {/* En-tête */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#1A76B5',
          margin: 0,
          flex: 1
        }}>
          {logement.title}
        </h3>
        
        {logement.prix && (
          <div style={{
            backgroundColor: '#E9F9FF',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A76B5',
            whiteSpace: 'nowrap'
          }}>
            {logement.prix}
          </div>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: '#4A5568',
        lineHeight: '1.6',
        margin: '0 0 20px 0',
        fontSize: '15px'
      }}>
        {logement.description}
      </p>

      {/* Détails */}
      {logement.details && logement.details.length > 0 && (
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#2D3748',
            margin: '0 0 12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
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
            gap: '8px'
          }}>
            {logement.details.map((detail, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '13px',
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '16px',
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0'
      }}>
        {/* Contact */}
        {logement.contact && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1A76B5'
            }}>
              📞
            </div>
            <div>
              <div style={{
                fontSize: '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Contact
              </div>
              <div style={{
                fontSize: '14px',
                color: '#2D3748',
                fontWeight: '500'
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
            gap: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1A76B5'
            }}>
              🌐
            </div>
            <div>
              <div style={{
                fontSize: '12px',
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
                  fontSize: '14px',
                  color: '#1A76B5',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = 'underline'
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = 'none'
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
            gap: '8px'
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#E9F9FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1A76B5'
            }}>
              📍
            </div>
            <div>
              <div style={{
                fontSize: '12px',
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
                  fontSize: '14px',
                  color: '#1A76B5',
                  fontWeight: '500',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.textDecoration = 'underline'
                }}
                onMouseLeave={(e) => {
                  e.target.style.textDecoration = 'none'
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