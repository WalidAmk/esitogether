'use client'

export default function ResourcesCard({ resource }) {
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
      {/* En-tête de la filière */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '20px'
      }}>
        <div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#1A76B5',
            margin: '0 0 8px 0'
          }}>
            {resource.filiere}
          </h3>
          <p style={{
            color: '#4A5568',
            fontSize: '14px',
            margin: 0,
            lineHeight: '1.4'
          }}>
            {resource.description}
          </p>
        </div>
        
        {/* Badge nombre de semestres */}
        <div style={{
          backgroundColor: '#E9F9FF',
          padding: '6px 12px',
          borderRadius: '16px',
          fontSize: '12px',
          fontWeight: '600',
          color: '#1A76B5'
        }}>
          {resource.semestres.length} {resource.semestres.length > 1 ? 'semestres' : 'semestre'}
        </div>
      </div>

      {/* Liste des semestres */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: '12px'
      }}>
        {resource.semestres.map((semestre, index) => (
          <a
            key={index}
            href={semestre.lien}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px 12px',
              backgroundColor: '#F7FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#E9F9FF'
              e.target.style.borderColor = '#82D5F5'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#F7FAFC'
              e.target.style.borderColor = '#E2E8F0'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#1A76B5',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white'
            }}>
              {semestre.semestre.includes('Année') ? '📊' : '📁'}
            </div>
            
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#2D3748',
              marginBottom: '4px'
            }}>
              {semestre.semestre}
            </span>
            
            <span style={{
              fontSize: '11px',
              color: '#718096',
              fontWeight: '500'
            }}>
              Accéder
            </span>
          </a>
        ))}
      </div>

      {/* Footer avec informations supplémentaires */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '20px',
        paddingTop: '16px',
        borderTop: '1px solid #E2E8F0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: '#718096'
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            backgroundColor: '#82D5F5',
            borderRadius: '50%'
          }}></span>
          Google Drive
        </div>
        
        <div style={{
          fontSize: '12px',
          color: '#718096',
          fontWeight: '500'
        }}>
          {resource.filiere.includes('RAPPORTS') ? 'Rapports de stage' : 'Cours et ressources'}
        </div>
      </div>
    </div>
  )
}