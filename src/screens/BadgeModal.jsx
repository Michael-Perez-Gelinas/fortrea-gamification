import { useState, useEffect } from 'react'
import { X, Building2, Microscope, Clock } from 'lucide-react'
import { colors } from '../tokens/colors'
import obBg from '../assets/ob-bg.png'
import badgeSeniorMonitor from '../assets/badges/badge-senior-monitor.png'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'
const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

const stats = [
  { Icon: Building2,  value: '50',        label: 'Site Visits' },
  { Icon: Microscope, value: '8',         label: 'Studies'     },
  { Icon: Clock,      value: '14 months', label: 'In Field'    },
]

function BadgeCircle() {
  return (
    <img
      src={badgeSeniorMonitor}
      alt="Senior Monitor"
      style={{ width: '150px', height: '150px', objectFit: 'contain' }}
    />
  )
}

export default function BadgeModal({ setCurrentScreen }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div style={{
      position:      'fixed',
      inset:          0,
      zIndex:         200,
      display:       'flex',
      flexDirection: 'column',
      overflow:      'hidden',
      transform:     mounted ? 'translateY(0)' : 'translateY(100%)',
      opacity:       mounted ? 1 : 0,
      transition:    'transform 480ms cubic-bezier(0.32, 0.72, 0, 1), opacity 300ms ease',
    }}>

      {/* Background image */}
      <img
        src={obBg}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />

      {/* Backdrop blur overlay */}
      <div style={{
        position:       'absolute',
        inset:           0,
        zIndex:          1,
        backdropFilter: 'blur(25px)',
        WebkitBackdropFilter: 'blur(25px)',
        background:     'rgba(255,255,255,0.5)',
        pointerEvents:  'none',
      }} />

      {/* X button row — same padding as ScreenHeader icon row */}
      <div style={{
        position: 'relative',
        zIndex:    10,
        padding:  '8px 16px 4px',
      }}>
        <button
          onClick={() => setCurrentScreen('home')}
          style={{
            padding:    '10px',
            margin:     '-10px',
            background: 'none',
            border:     'none',
            cursor:     'pointer',
            display:    'flex',
            alignItems: 'center',
          }}
        >
          <X size={24} color={colors.warmBlack} />
        </button>
      </div>

      {/* Scrollable content */}
      <div style={{
        position:      'relative',
        zIndex:         2,
        flex:           1,
        overflowY:     'auto',
        paddingTop:    '24px',
        paddingLeft:   '16px',
        paddingRight:  '16px',
        paddingBottom: '140px',
        display:       'flex',
        flexDirection: 'column',
        gap:           '24px',
      }}>

        {/* Card with badge floating above */}
        <div style={{ position: 'relative', marginTop: '83px' }}>

          {/* Badge — absolute, centred, overlapping top of card */}
          <div style={{
            position:  'absolute',
            top:       '-83px',
            left:      '50%',
            transform: 'translateX(-50%)',
            width:     '150px',
            height:    '150px',
            zIndex:     3,
          }}>
            <BadgeCircle />
          </div>

          {/* White card */}
          <div style={{
            backgroundColor: colors.white,
            borderRadius:    '16px',
            boxShadow:        shadowLarge,
            padding:         '20px',
            height:          '206px',
            display:         'flex',
            flexDirection:   'column',
            justifyContent:  'flex-end',
            alignItems:      'center',
            gap:             '16px',
            position:        'relative',
          }}>
            <div style={{
              fontFamily:    SF,
              fontSize:      '11px',
              fontWeight:     500,
              color:          colors.forest,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              textAlign:     'center',
            }}>
              New Credential Earned
            </div>

            <div style={{
              fontFamily:    GT,
              fontSize:      '32px',
              fontWeight:     400,
              color:          colors.warmBlack,
              letterSpacing: '-0.45px',
              lineHeight:    '32px',
              textAlign:     'center',
            }}>
              Senior Monitor
            </div>

            <div style={{
              fontFamily:    SF,
              fontSize:      '15px',
              color:          colors.neutralBody,
              lineHeight:    '20px',
              letterSpacing: '-0.23px',
              maxWidth:      '276px',
              textAlign:     'center',
            }}>
              Awarded for completing 50 site visits across your studies.
            </div>
          </div>
        </div>

        {/* Stat rows — floating, no card wrapper */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
          {stats.map(({ Icon, value, label }) => (
            <div
              key={label}
              style={{
                background:    'linear-gradient(to right, rgba(255,255,255,0.35), rgba(255,255,255,0))',
                borderRadius:  '16px',
                padding:       '20px',
                display:       'flex',
                alignItems:    'center',
                gap:           '20px',
              }}
            >
              <Icon size={30} color={colors.forest} />
              <div>
                <div style={{ fontFamily: SF, fontSize: '20px', fontWeight: 500, color: 'rgba(13,1,1,0.9)', lineHeight: '20px' }}>
                  {value}
                </div>
                <div style={{ fontFamily: SF, fontSize: '14px', color: colors.neutralBody, letterSpacing: '-0.08px' }}>
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA */}
      <div style={{
        position:       'fixed',
        bottom:          0,
        left:            0,
        right:           0,
        background:     'linear-gradient(to bottom, rgba(250,250,250,0) 0%, rgba(250,250,250,0.85) 40%, rgba(250,250,250,0.98) 70%)',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'flex-end',
        zIndex:          10,
        padding:        '24px 16px 0',
        paddingBottom:   0,
      }}>
        <div style={{ padding: '0 0 48px' }}>
          <button
            onClick={() => setCurrentScreen('myProgressGamified')}
            style={{
              width:           '100%',
              backgroundColor:  colors.forest,
              color:            colors.white,
              border:          'none',
              borderRadius:    '999px',
              padding:         '14px 20px',
              fontSize:        '17px',
              fontWeight:       600,
              fontFamily:       SF,
              letterSpacing:   '-0.43px',
              cursor:          'pointer',
            }}
          >
            View My Credentials
          </button>
        </div>
      </div>

    </div>
  )
}
