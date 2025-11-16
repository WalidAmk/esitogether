'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import contentData from '../../data/content.json'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import LogementCard from '../../components/LogementCard'
import TransportCard from '../../components/TransportCard'
import ResourcesCard from '../../components/ResourcesCard'
import AssociationCard from '../../components/AssociationCard'
import EvenementCard from '../../components/EvenementCard'
import AutoFormationCard from '../../components/AutoFormationCard'
import FAQCard from '../../components/FAQCard'

export default function Dashboard() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('logement')
  const [activeSubsection, setActiveSubsection] = useState('residences-universitaires')
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setSidebarOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const currentSection = contentData.sections[activeSection]
  const currentSubsection = currentSection?.subsections[activeSubsection]

  const handleSectionClick = (key, section) => {
    setActiveSection(key)
    const firstSubsection = Object.keys(section.subsections)[0]
    setActiveSubsection(firstSubsection)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const handleSubsectionClick = (subKey) => {
    setActiveSubsection(subKey)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8FAFC',
    }}>
      {/* Overlay pour mobile */}
      {isMobile && sidebarOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 40,
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div style={{
        display: 'flex',
        minHeight: '100vh',
      }}>
        {/* Sidebar */}
        <div style={{
          width: isMobile ? (sidebarOpen ? '280px' : '0') : '280px',
          backgroundColor: '#1A76B5',
          color: 'white',
          padding: isMobile ? (sidebarOpen ? '20px 0' : '0') : '20px 0',
          position: isMobile ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 50,
          transition: 'width 0.3s ease',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          {/* En-tête Sidebar */}
          <div style={{
            padding: '0 20px 20px 20px',
            borderBottom: '1px solid #82D5F5',
            opacity: sidebarOpen || !isMobile ? 1 : 0,
            transition: 'opacity 0.3s ease'
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
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <Image 
                  src={logo}
                  alt="ESITogether" 
                  style={{
                    height: '40px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation principale */}
          <nav style={{
            padding: '20px 0',
            height: 'calc(100vh - 100px)',
            overflowY: 'auto',
            opacity: sidebarOpen || !isMobile ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}>
            {Object.entries(contentData.sections).map(([key, section]) => (
              <div key={key} style={{ marginBottom: '8px' }}>
                <button
                  onClick={() => handleSectionClick(key, section)}
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
                    transition: 'background-color 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== key && !isMobile) {
                      e.target.style.backgroundColor = '#1E6091'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== key && !isMobile) {
                      e.target.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  <span style={{ fontSize: '16px', minWidth: '20px' }}>{section.icon}</span>
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
                        onClick={() => handleSubsectionClick(subKey)}
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
                          transition: 'all 0.2s ease',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => {
                          if (activeSubsection !== subKey && !isMobile) {
                            e.target.style.backgroundColor = '#1E6091'
                            e.target.style.color = 'white'
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeSubsection !== subKey && !isMobile) {
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
          minWidth: 0,
          marginLeft: isMobile ? '0' : '0',
          transition: 'margin-left 0.3s ease'
        }}>
          {/* Header */}
          <header style={{
            backgroundColor: 'white',
            padding: isMobile ? '12px 16px' : '16px 24px',
            borderBottom: '1px solid #E2E8F0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexShrink: 0,
            position: 'sticky',
            top: 0,
            zIndex: 30
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              {/* Bouton menu hamburger pour mobile */}
              {isMobile && (
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#E9F9FF',
                    border: '1px solid #82D5F5',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '18px',
                    color: '#1A76B5',
                    flexShrink: 0
                  }}
                >
                  ☰
                </button>
              )}
              
              <div>
                <h1 style={{
                  fontSize: isMobile ? '18px' : '24px',
                  fontWeight: 'bold',
                  color: '#1A2937',
                  margin: '0 0 4px 0'
                }}>
                  {currentSubsection?.title || 'Tableau de Bord'}
                </h1>
                <p style={{
                  fontSize: isMobile ? '12px' : '14px',
                  color: '#718096',
                  margin: 0
                }}>
                  {currentSection?.title || 'ESITogether'}
                </p>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <span style={{
                color: '#4A5568',
                fontSize: isMobile ? '12px' : '14px',
                fontWeight: '500',
                display: isMobile ? 'none' : 'block'
              }}>
                Bonjour, Utilisateur
              </span>
              
              {/* Indicateur mobile */}
              {isMobile && (
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#82D5F5',
                  borderRadius: '50%'
                }} />
              )}
            </div>
          </header>

          {/* Contenu Dynamique */}
          <main style={{
            flex: 1,
            padding: isMobile ? '16px' : '24px',
            overflowY: 'auto',
            backgroundColor: '#F8FAFC'
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: isMobile ? '16px' : '24px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              minHeight: '400px'
            }}>
              {currentSubsection?.content && currentSubsection.content.length > 0 ? (
                <div style={{
                  display: 'grid',
                  gap: isMobile ? '16px' : '24px'
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
                    // Autoformation
                    else if (activeSection === 'ressources-academiques' && activeSubsection === 'autoformation') {
                      return <AutoFormationCard key={index} formation={item} />
                    }
                    // FAQ
                    else if (activeSection === 'faq' && activeSubsection === 'questions-frequentes') {
                      return <FAQCard key={index} faq={item} />
                    }
                    // Sections par défaut
                    else {
                      return (
                        <div key={index} style={{
                          border: '1px solid #E2E8F0',
                          borderRadius: '8px',
                          padding: isMobile ? '16px' : '20px',
                          backgroundColor: '#F7FAFC'
                        }}>
                          <h3 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: 'bold',
                            color: '#1A76B5',
                            margin: '0 0 12px 0'
                          }}>
                            {item.title || item.filiere}
                          </h3>
                          {item.description && (
                            <p style={{
                              color: '#4A5568',
                              margin: '0 0 16px 0',
                              lineHeight: '1.5',
                              fontSize: isMobile ? '14px' : '15px'
                            }}>
                              {item.description}
                            </p>
                          )}
                        </div>
                      )
                    }
                  })}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: isMobile ? '40px 20px' : '60px 40px',
                  color: '#718096'
                }}>
                  <div style={{
                    fontSize: isMobile ? '36px' : '48px',
                    marginBottom: '16px',
                    opacity: 0.5
                  }}>
                    {activeSection === 'ressources-academiques' && activeSubsection === 'autoformation' ? '📚' :
                      activeSection === 'vie-etudiante' && activeSubsection === 'evenements' ? '🎭' :
                      '📝'}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
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
                    fontSize: isMobile ? '14px' : '16px', 
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
    </div>
  )
}