'use client'

export default function AssociationCard({ association }) {
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
      {/* En-tête de l'association */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          {/* Logo/Icone de l'association */}
          <div style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#1A76B5',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            flexShrink: 0
          }}>
            {association.title.charAt(0)}
          </div>
          
          <div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#1A76B5',
              margin: '0 0 8px 0'
            }}>
              {association.title}
            </h3>
            <p style={{
              color: '#4A5568',
              fontSize: '14px',
              margin: 0,
              lineHeight: '1.5',
              maxWidth: '500px'
            }}>
              {association.description}
            </p>
          </div>
        </div>
        
        {/* Badge type d'association */}
        <div style={{
          backgroundColor: '#E9F9FF',
          padding: '6px 12px',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#1A76B5',
          whiteSpace: 'nowrap'
        }}>
          Club Étudiant
        </div>
      </div>

      {/* Domaines d'activité */}
      {association.details && association.details.length > 0 && (
        <div style={{ 
          marginBottom: '20px',
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
            Domaines d'Activité
          </h4>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            {association.details.map((domaine, index) => (
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
                {domaine}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Cellules/Commissions */}
      {association.Cellules && association.Cellules.length > 0 && (
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
            Cellules Spécialisées
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {association.Cellules.map((cellule, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#E9F9FF',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1px solid #82D5F5'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px'
                }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#1A76B5',
                    borderRadius: '4px',
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
                    fontWeight: '600',
                    color: '#1A76B5'
                  }}>
                    {cellule}
                  </span>
                </div>
                <p style={{
                  fontSize: '12px',
                  color: '#4A5568',
                  margin: 0,
                  paddingLeft: '24px'
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
        gap: '16px',
        paddingLeft: '76px',
        flexWrap: 'wrap'
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
            Site Officiel
          </a>
        )}

        {/* Instagram - CORRECTION ICI : "instagram" au lieu de "Instagram" */}
        {association.instagram && (
          <a
            href={association.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#E1306C',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'background-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#C13584'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E1306C'
            }}
          >
            <span>📷</span>
            Instagram
          </a>
        )}

        {/* Bouton de contact général */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#F7FAFC',
          color: '#4A5568',
          padding: '10px 20px',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '600',
          border: '1px solid #E2E8F0',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#E9F9FF'
          e.target.style.borderColor = '#82D5F5'
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#F7FAFC'
          e.target.style.borderColor = '#E2E8F0'
        }}
        >
          <span>📧</span>
          Rejoindre
        </div>
      </div>

      {/* Footer informatif */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0',
        paddingLeft: '76px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '12px',
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
            ESI Rabat
          </span>
          
          {association.Cellules && (
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
              {association.Cellules.length} cellules
            </span>
          )}
        </div>
        
        <div style={{
          fontSize: '12px',
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