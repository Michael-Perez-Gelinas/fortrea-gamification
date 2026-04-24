import { useState, useRef } from 'react'
import obBg   from '../assets/ob-bg.png'
import obLogo from '../assets/ob-logo.png'
import ob1    from '../assets/ob1.png'
import ob2    from '../assets/ob2.png'
import ob3    from '../assets/ob3.png'

const slides = [
  {
    image: ob1,
    copy: `Everything you need for your visit,\nright when you're on site.`,
  },
  {
    image: ob2,
    copy: `Ask anything about your study\nand get answers in seconds.`,
  },
  {
    image: ob3,
    copy: `Your sites, reports, and history\norganized across every study.`,
  },
]

const FADE_DURATION = 300

export default function Onboarding({ setCurrentScreen }) {
  const [slide, setSlide]     = useState(0)
  const [visible, setVisible] = useState(true)
  const touchStartX           = useRef(null)

  function advance() {
    if (slide < slides.length - 1) {
      fade(() => setSlide(s => s + 1))
    } else {
      setCurrentScreen('home')
    }
  }

  function fade(callback) {
    setVisible(false)
    setTimeout(() => {
      callback()
      setVisible(true)
    }, FADE_DURATION)
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function onTouchEnd(e) {
    if (touchStartX.current === null) return
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (delta > 50) advance()
    touchStartX.current = null
  }

  const { image, copy } = slides[slide]
  const isLastSlide = slide === slides.length - 1

  return (
    <div
      style={{ position: 'relative', height: '100dvh', overflow: 'hidden' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background — never fades */}
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

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
      }}>

        {/* Logo — never fades */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '64px',
          flexShrink: 0,
        }}>
          <img
            src={obLogo}
            alt="Fortrea"
            style={{ width: '224px', objectFit: 'contain' }}
          />
        </div>

        {/* Image + copy — fade on slide change */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          opacity: visible ? 1 : 0,
          transition: `opacity ${FADE_DURATION}ms ease-in-out`,
        }}>
          {/* Image anchored to top of available space */}
          <div style={{
            marginTop: '48px',
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img
              src={image}
              alt=""
              style={{
                width: '100%',
                maxWidth: '320px',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Spacer pushes copy down toward bottom section */}
          <div style={{ flex: 1 }} />

          <p style={{
            textAlign: 'center',
            color: '#0D0101',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '28px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            whiteSpace: 'pre-line',
            margin: 0,
            padding: '0 24px 24px',
          }}>
            {copy}
          </p>
        </div>

        {/* Dots + CTA — never fade, always visible */}
        <div style={{
          padding: '8px 24px 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}>
            {slides.map((_, i) => (
              <div
                key={i}
                style={{
                  width:           i === slide ? '10px' : '6px',
                  height:          i === slide ? '10px' : '6px',
                  borderRadius:    '50%',
                  backgroundColor: i === slide ? '#017E25' : '#D6D4D4',
                  transition:      `all ${FADE_DURATION}ms ease-in-out`,
                }}
              />
            ))}
          </div>

          <button
            onClick={advance}
            style={{
              width:           '100%',
              height:          '56px',
              borderRadius:    '999px',
              backgroundColor: '#017E25',
              color:           '#FFFFFF',
              fontSize:        '17px',
              fontWeight:      600,
              fontFamily:      '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              border:          'none',
              cursor:          'pointer',
              overflow:        'hidden',
              position:        'relative',
            }}
          >
            {/* "Next" fades out on last slide */}
            <span style={{
              position:   'absolute',
              inset:      0,
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity:    isLastSlide ? 0 : 1,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}>
              Next
            </span>
            {/* "Get Started" fades in on last slide */}
            <span style={{
              position:   'absolute',
              inset:      0,
              display:    'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity:    isLastSlide ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            }}>
              Get Started
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
