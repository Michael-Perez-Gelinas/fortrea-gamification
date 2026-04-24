import { useState, useEffect } from 'react'
import { Building2, Calendar, Clock, CheckCircle } from 'lucide-react'
import { colors } from '../tokens/colors'
import obBg from '../assets/ob-bg.png'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'

const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

const stats = [
  { Icon: Building2, value: '12',           label: 'Visits to this Site' },
  { Icon: Calendar,  value: 'Jan 8, 2024',  label: 'First Visit'         },
  { Icon: Clock,     value: '14 months',    label: 'Study Duration'      },
]

export default function COVModal({ setCurrentScreen }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: colors.neutral50,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      transform: mounted ? 'translateY(0)' : 'translateY(100%)',
      opacity: mounted ? 1 : 0,
      transition: 'transform 480ms cubic-bezier(0.32, 0.72, 0, 1), opacity 300ms ease',
    }}>

      {/* Background image */}
      <img
        src={obBg}
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* White overlay for readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255,255,255,0.45)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'hidden',
      }}>

        {/* Header */}
        <div style={{ padding: '40px 16px 24px' }}>
          <div style={{
            fontFamily: SF,
            fontSize: '13px',
            color: colors.neutralBody,
            letterSpacing: '-0.08px',
            marginBottom: '4px',
          }}>
            Close Out Visit
          </div>
          <div style={{
            fontFamily: GT,
            fontSize: '34px',
            fontWeight: 400,
            color: colors.warmBlack,
            letterSpacing: '0.4px',
            lineHeight: '41px',
          }}>
            Massey Cancer Center
          </div>
        </div>

        {/* Scrollable body */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 16px',
          paddingBottom: '180px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>

          {/* Section 1 — site closed */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <CheckCircle size={20} color={colors.forest} />
              <span style={{ fontFamily: SF, fontSize: '17px', fontWeight: 600, color: '#000000' }}>
                Site is now closed
              </span>
            </div>

            <div style={{
              backgroundColor: colors.white,
              borderRadius: '16px',
              boxShadow: shadowLarge,
              padding: '20px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: SF, fontSize: '20px', fontWeight: 600, color: colors.warmBlack, lineHeight: '25px' }}>
                    Site 879
                  </div>
                  <div style={{ fontFamily: SF, fontSize: '15px', color: colors.neutralBody }}>
                    KAM7823
                  </div>
                </div>
                <span style={{
                  backgroundColor: colors.neutral100,
                  color: '#322727',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: SF,
                  borderRadius: '999px',
                  padding: '4px 8px',
                  whiteSpace: 'nowrap',
                }}>
                  On-site COV
                </span>
              </div>
            </div>
          </div>

          {/* Section 2 — stat rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {stats.map(({ Icon, value, label }) => (
              <div key={label} style={{
                background: 'linear-gradient(to right, rgba(255,255,255,0.35), rgba(255,255,255,0))',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}>
                <Icon size={30} color={colors.forest} />
                <div>
                  <div style={{ fontFamily: SF, fontSize: '20px', fontWeight: 500, color: colors.warmBlack }}>
                    {value}
                  </div>
                  <div style={{ fontFamily: SF, fontSize: '14px', color: colors.neutralBody }}>
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA — gradient overlay + button */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '180px',
        background: 'linear-gradient(to bottom, rgba(249,245,241,0) 0%, rgba(249,245,241,0.85) 40%, rgba(249,245,241,0.98) 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        zIndex: 3,
      }}>
        <div style={{ padding: '0 24px 48px' }}>
          <button
            onClick={() => setCurrentScreen('emptyState')}
            style={{
              width: '100%',
              backgroundColor: colors.forest,
              color: colors.white,
              border: 'none',
              borderRadius: '999px',
              padding: '14px 20px',
              fontSize: '17px',
              fontWeight: 600,
              fontFamily: SF,
              letterSpacing: '-0.43px',
              cursor: 'pointer',
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
