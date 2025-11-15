'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'
import contentData from '../../data/content.json'
import LogementCard from '../../components/LogementCard'
import TransportCard from '../../components/TransportCard'
import ResourcesCard from '../../components/ResourcesCard'
import AssociationCard from '../../components/AssociationCard'
import EvenementCard from '../../components/EvenementCard'
import AutoFormationCard from '../../components/AutoFormationCard'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

export default function Dashboard() {
  
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('logement')
  const [activeSubsection, setActiveSubsection] = useState('residences-universitaires')

  

  

  const currentSection = contentData.sections[activeSection]
  const currentSubsection = currentSection?.subsections[activeSubsection]

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
    }}>
      {/* Sidebar */}
      <div style={{
        width: '280px',
        backgroundColor: '#1A76B5',
        color: 'white',
        padding: '20px 0',
        flexShrink: 0
      }}>
        {/* En-tête Sidebar */}
        <div style={{
          padding: '0 20px 20px 20px',
          borderBottom: '1px solid #82D5F5'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            {/* Votre Logo */}
              <div style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image 
                  src={logo}
                  alt="ESITogether" 
                  style={{
                    height: '40px',
                  }}
                />
              </div>
          </div>
        </div>

        {/* Navigation principale */}
        <nav style={{
          padding: '20px 0'
        }}>
          {Object.entries(contentData.sections).map(([key, section]) => (
            <div key={key} style={{ marginBottom: '8px' }}>
              <button
                onClick={() => {
                  setActiveSection(key)
                  // Sélectionner la première sous-section par défaut
                  const firstSubsection = Object.keys(section.subsections)[0]
                  setActiveSubsection(firstSubsection)
                }}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  backgroundColor: activeSection === key ? '#155a8a' : 'transparent',
                  border: 'none',
                  color: 'white',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== key) {
                    e.target.style.backgroundColor = '#1E6091'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== key) {
                    e.target.style.backgroundColor = 'transparent'
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{section.icon}</span>
                {section.title}
              </button>

              {/* Sous-sections */}
              {activeSection === key && (
                <div style={{
                  paddingLeft: '32px',
                  marginTop: '4px'
                }}>
                  {Object.entries(section.subsections).map(([subKey, subsection]) => (
                    <button
                      key={subKey}
                      onClick={() => setActiveSubsection(subKey)}
                      style={{
                        width: '100%',
                        padding: '8px 16px',
                        backgroundColor: activeSubsection === subKey ? '#0F4C75' : 'transparent',
                        border: 'none',
                        color: activeSubsection === subKey ? 'white' : '#E9F9FF',
                        textAlign: 'left',
                        cursor: 'pointer',
                        fontSize: '13px',
                        borderRadius: '4px',
                        marginBottom: '2px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (activeSubsection !== subKey) {
                          e.target.style.backgroundColor = '#1E6091'
                          e.target.style.color = 'white'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeSubsection !== subKey) {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.color = '#E9F9FF'
                        }
                      }}
                    >
                      {subsection.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Contenu principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }}>
        {/* Header */}
        <header style={{
          backgroundColor: 'white',
          padding: '16px 24px',
          borderBottom: '1px solid #E2E8F0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1A2937',
              margin: '0 0 4px 0'
            }}>
              {currentSubsection?.title || 'Tableau de Bord'}
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#718096',
              margin: 0
            }}>
              {currentSection?.title || 'ESITogether'}
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}>
            <span style={{
              color: '#4A5568',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              Bonjour, Utilisateur
            </span>
            
          </div>
        </header>

        {/* Contenu Dynamique */}
        <main style={{
          flex: 1,
          padding: '24px',
          overflowY: 'auto',
          backgroundColor: '#F8FAFC'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            minHeight: '400px'
          }}>
            {currentSubsection?.content && currentSubsection.content.length > 0 ? (
              <div style={{
                display: 'grid',
                gap: '24px'
              }}>
                {currentSubsection.content.map((item, index) => {
                  // Logement
                  if (activeSection === 'logement') {
                    return <LogementCard key={index} logement={item} />
                  }
                  // Transport
                  else if (activeSection === 'transport') {
                    return <TransportCard key={index} transport={item} />
                  }
                  // Ressources Académiques
                  else if (activeSection === 'ressources-academiques' && activeSubsection === 'resources') {
                    return <ResourcesCard key={index} resource={item} />
                  }
                  // Vie Étudiante - Associations
                  else if (activeSection === 'vie-etudiante' && activeSubsection === 'Associations') {
                    return <AssociationCard key={index} association={item} />
                  }

                  // Utilisez EvenementCard pour les événements
                    else if (activeSection === 'vie-etudiante' && activeSubsection === 'evenements') {
                        return <EvenementCard key={index} evenement={item} />
                    }

                    else if (activeSection === 'ressources-academiques' && activeSubsection === 'autoformation') {
                      return <AutoFormationCard key={index} formation={item} />
                    }

                  // Sections par défaut (pour evenements, autoformation, etc.)
                  else {
                    // return (
                    //   <div
                    //     key={index}
                    //     style={{
                    //       border: '1px solid #E2E8F0',
                    //       borderRadius: '12px',
                    //       padding: '24px',
                    //       backgroundColor: '#F7FAFC',
                    //       transition: 'all 0.3s ease'
                    //     }}
                    //   >
                    //     <h3 style={{
                    //       fontSize: '20px',
                    //       fontWeight: 'bold',
                    //       color: '#1A76B5',
                    //       margin: '0 0 12px 0'
                    //     }}>
                    //       {item.title}
                    //     </h3>
                        
                    //     {item.description && (
                    //       <p style={{
                    //         color: '#4A5568',
                    //         margin: '0 0 16px 0',
                    //         lineHeight: '1.6',
                    //         fontSize: '15px'
                    //       }}>
                    //         {item.description}
                    //       </p>
                    //     )}

                    //     {/* Détails génériques */}
                    //     {item.details && (
                    //       <div style={{ marginBottom: '16px' }}>
                    //         <h4 style={{
                    //           fontSize: '16px',
                    //           fontWeight: '600',
                    //           color: '#2D3748',
                    //           margin: '0 0 8px 0'
                    //         }}>
                    //           Informations :
                    //         </h4>
                    //         <ul style={{
                    //           color: '#4A5568',
                    //           margin: 0,
                    //           paddingLeft: '20px'
                    //         }}>
                    //           {item.details.map((detail, i) => (
                    //             <li key={i} style={{ marginBottom: '4px' }}>{detail}</li>
                    //           ))}
                    //         </ul>
                    //       </div>
                    //     )}

                    //     {/* Horaires */}
                    //     {item.horaires && (
                    //       <div style={{ marginBottom: '16px' }}>
                    //         <h4 style={{
                    //           fontSize: '16px',
                    //           fontWeight: '600',
                    //           color: '#2D3748',
                    //           margin: '0 0 8px 0'
                    //         }}>
                    //           Horaires :
                    //         </h4>
                    //         <ul style={{
                    //           color: '#4A5568',
                    //           margin: 0,
                    //           paddingLeft: '20px'
                    //         }}>
                    //           {item.horaires.map((horaire, i) => (
                    //             <li key={i} style={{ marginBottom: '4px' }}>{horaire}</li>
                    //           ))}
                    //         </ul>
                    //       </div>
                    //     )}

                    //     {/* Informations supplémentaires */}
                    //     {(item.prix || item.contact || item.lien) && (
                    //       <div style={{
                    //         display: 'flex',
                    //         gap: '20px',
                    //         fontSize: '14px',
                    //         flexWrap: 'wrap'
                    //       }}>
                    //         {item.prix && (
                    //           <div>
                    //             <strong style={{ color: '#2D3748' }}>Prix : </strong>
                    //             <span style={{ color: '#1A76B5', fontWeight: '600' }}>{item.prix}</span>
                    //           </div>
                    //         )}
                    //         {item.contact && (
                    //           <div>
                    //             <strong style={{ color: '#2D3748' }}>Contact : </strong>
                    //             <span style={{ color: '#1A76B5' }}>{item.contact}</span>
                    //           </div>
                    //         )}
                    //         {item.lien && (
                    //           <div>
                    //             <strong style={{ color: '#2D3748' }}>Lien : </strong>
                    //             <a 
                    //               href={item.lien} 
                    //               target="_blank" 
                    //               rel="noopener noreferrer"
                    //               style={{ color: '#1A76B5', textDecoration: 'none' }}
                    //               onMouseEnter={(e) => {
                    //                 e.target.style.textDecoration = 'underline'
                    //               }}
                    //               onMouseLeave={(e) => {
                    //                 e.target.style.textDecoration = 'none'
                    //               }}
                    //             >
                    //               Accéder
                    //             </a>
                    //           </div>
                    //         )}
                    //       </div>
                    //     )}
                    //   </div>
                    // )
                  }
                })}
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '60px 40px',
                color: '#718096'
              }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  opacity: 0.5
                }}>
                  {activeSection === 'ressources-academiques' && activeSubsection === 'autoformation' ? '📚' :
                   activeSection === 'vie-etudiante' && activeSubsection === 'evenements' ? '🎭' :
                   '📝'}
                </div>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#4A5568',
                  margin: '0 0 12px 0'
                }}>
                  {activeSubsection === 'autoformation' 
                    ? 'Autoformation en Développement' 
                    : activeSubsection === 'evenements'
                    ? 'Aucun Événement Programmé'
                    : 'Section en Construction'
                  }
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  margin: 0,
                  maxWidth: '400px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  lineHeight: '1.5'
                }}>
                  {activeSubsection === 'autoformation' 
                    ? 'Cette section sera bientôt disponible avec des ressources d\'autoformation et des cours en ligne.' 
                    : activeSubsection === 'evenements'
                    ? 'Revenez plus tard pour découvrir les prochains événements étudiants.'
                    : 'Le contenu de cette section sera ajouté prochainement.'
                  }
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

