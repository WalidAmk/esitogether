'use client'

export default function TransportCard({ transport }) {
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
      {/* En-tête avec type de transport */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#E9F9FF',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: '#1A76B5'
          }}>
            {transport.title === 'Bus' && '🚌'}
            {transport.title === 'Tramway' && '🚊'}
            {transport.title === 'Train' && '🚆'}
          </div>
          <div>
            <h3 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1A76B5',
              margin: '0 0 4px 0'
            }}>
              {transport.title}
            </h3>
            <p style={{
              fontSize: '14px',
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
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1A76B5',
            textAlign: 'center'
          }}>
            {transport.prix}
          </div>
        )}
      </div>

      {/* Description */}
      <p style={{
        color: '#4A5568',
        lineHeight: '1.6',
        margin: '0 0 20px 0',
        fontSize: '15px',
        paddingLeft: '60px'
      }}>
        {transport.description}
      </p>

      {/* Lignes directes */}
      {transport['Lignes direct'] && transport['Lignes direct'].length > 0 && (
        <div style={{ 
          marginBottom: '20px',
          paddingLeft: '60px'
        }}>
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
            Lignes Directes
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {transport['Lignes direct'].map((ligne, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#1A76B5',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '13px',
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
          marginBottom: '20px',
          paddingLeft: '60px'
        }}>
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
            Arrêts Principaux
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {transport.arrets.map((arret, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  color: '#4A5568',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{
                  width: '6px',
                  height: '6px',
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
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: '60px'
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
              gap: '8px',
              backgroundColor: '#1A76B5',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#155a8a'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1A76B5'
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
          gap: '8px',
          fontSize: '13px',
          color: '#718096'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#82D5F5',
            borderRadius: '50%'
          }}></span>
          Transport {transport.title.toLowerCase()}
        </div>
      </div>
    </div>
  )
}