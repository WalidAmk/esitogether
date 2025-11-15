'use client'

export default function EvenementCard({ evenement }) {
  // Fonction pour formater la date
  const formatDate = (dateString) => {
    return dateString
  }

  return (
    <div style={{
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: '24px',
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      marginBottom: '20px',
      position: 'relative'
    }}
    >
      {/* Badge de date */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        backgroundColor: '#E9F9FF',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '600',
        color: '#1A76B5',
        border: '1px solid #82D5F5'
      }}>
        {formatDate(evenement.date)}
      </div>

      {/* En-tête de l'événement */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        marginBottom: '16px',
        paddingRight: '120px'
      }}>
        {/* Icône événement */}
        <div style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#1A76B5',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
          flexShrink: 0
        }}>
          🎊
        </div>
        
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 8px 0'
          }}>
            {evenement.title}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: '15px',
            margin: 0,
            lineHeight: '1.5'
          }}>
            {evenement.description}
          </p>
        </div>
      </div>

      {/* Informations lieu et date */}
      <div style={{
        display: 'flex',
        gap: '24px',
        marginBottom: '20px',
        paddingLeft: '76px',
        flexWrap: 'wrap'
      }}>
        {/* Lieu */}
        {evenement.lieu && (
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
              fontSize: '16px',
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
                Lieu
              </div>
              <div style={{
                fontSize: '14px',
                color: '#2D3748',
                fontWeight: '600'
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
              fontSize: '16px',
              color: '#1A76B5'
            }}>
              📅
            </div>
            <div>
              <div style={{
                fontSize: '12px',
                color: '#718096',
                fontWeight: '500'
              }}>
                Date
              </div>
              <div style={{
                fontSize: '14px',
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
          marginBottom: '24px',
          paddingLeft: '76px'
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
            Activités Prévenues
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {evenement.details.map((activite, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F7FAFC',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#82D5F5',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  {index + 1}
                </div>
                <span style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#4A5568'
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
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: '76px',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Bouton principal */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
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
              <span>ℹ️</span>
              Plus d'informations
            </a>
          )}

          {/* Bouton participer (simulé) */}
          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#E9F9FF',
              color: '#1A76B5',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              border: '1px solid #82D5F5',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#82D5F5'
              e.target.style.color = 'white'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E9F9FF'
              e.target.style.color = '#1A76B5'
            }}
          >
            <span>✅</span>
            Participer
          </button>
        </div>

        {/* Statut de l'événement */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: '#718096',
          fontWeight: '500'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
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