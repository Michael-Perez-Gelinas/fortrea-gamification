import { useState } from 'react'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

// Cutout positions are approximate for the fixed 375px prototype viewport.
// Positions derived from computed Home layout:
//   Header (icon row 32px + title row 81px) = 113px
//   Content paddingTop 8px, section header ~32px, card padding 20px
const steps = [
  {
    id:     1,
    // Scan button — footer row of Today's Visit card, right side
    cutout: { top: 420, left: 275, width: 103, height: 38, borderRadius: '40px' },
    tooltip: { position: 'top', value: 472 },
    label:  '1/4',
    title:  'Site Visit Log',
    body:   'Verify that you are on site by scanning the Site Visit Log. Scanning is available offline.',
    cta:    'Next',
  },
  {
    id:     2,
    // Chat tab — center third of tab bar
    cutout: { bottom: 16, left: 156, width: 80, height: 60, borderRadius: '8px' },
    tooltip: { position: 'bottom', value: 90 },
    label:  '2/4',
    title:  'Ask your AI assistant',
    body:   'Ask anything about your studies and get answers in seconds — without leaving the visit.',
    cta:    'Next',
  },
  {
    id:     3,
    // Site 879 priority row — first row in Trip Reports card
    cutout: { top: 542, left: 24, width: 343, height: 210, borderRadius: '16px' },
    tooltip: { position: 'top', value: 305 },
    label:  '3/4',
    title:  'Complete trip reports',
    body:   'Swipe left on any trip report to mark it complete. Your list updates instantly.',
    cta:    'Next',
  },
  {
    id:     4,
    // My Studies tab — right third of tab bar
    cutout: { bottom: 16, left: 288, width: 80, height: 60, borderRadius: '8px' },
    tooltip: { position: 'bottom', value: 103 },
    label:  '4/4',
    title:  'Your studies',
    body:   "View all the studies you're currently evaluating, with full site and contact details.",
    cta:    'Get Started',
  },
]

export default function Walkthrough({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0)
  const step = steps[stepIndex]

  function handleNext() {
    if (stepIndex < steps.length - 1) {
      setStepIndex(i => i + 1)
    } else {
      onComplete()
    }
  }

  const { cutout, tooltip } = step

  const cutoutStyle = {
    position:     'absolute',
    width:        cutout.width,
    height:       cutout.height,
    borderRadius: cutout.borderRadius,
    boxShadow:    '0 0 0 9999px rgba(0,0,0,0.6)',
    zIndex:       1,
    ...(cutout.top    !== undefined ? { top:    cutout.top    } : {}),
    ...(cutout.bottom !== undefined ? { bottom: cutout.bottom } : {}),
    ...(cutout.left   !== undefined ? { left:   cutout.left   } : {}),
  }

  const tooltipStyle = {
    position:        'absolute',
    width:           '280px',
    left:            '50%',
    transform:       'translateX(-50%)',
    backgroundColor: '#FFFFFF',
    borderRadius:    '16px',
    boxShadow:       shadowLarge,
    padding:         '16px',
    zIndex:          2,
    ...(tooltip.position === 'top'    ? { top:    tooltip.value } : {}),
    ...(tooltip.position === 'bottom' ? { bottom: tooltip.value } : {}),
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 500 }}>
      {/* Spotlight cutout — box-shadow creates the dark overlay surround */}
      <div style={cutoutStyle} />

      {/* Tooltip card */}
      <div style={tooltipStyle}>
        <div style={{
          fontFamily:   SF,
          fontSize:     '12px',
          color:        '#655E5E',
          marginBottom: '4px',
        }}>
          {step.label}
        </div>
        <div style={{
          fontFamily:   SF,
          fontSize:     '17px',
          fontWeight:   600,
          color:        '#0D0101',
          marginBottom: '4px',
        }}>
          {step.title}
        </div>
        <div style={{
          fontFamily:   SF,
          fontSize:     '15px',
          color:        '#655E5E',
          lineHeight:   '22px',
          marginBottom: '12px',
        }}>
          {step.body}
        </div>
        <button
          onClick={handleNext}
          style={{
            width:           '100%',
            backgroundColor: '#017E25',
            color:           '#FFFFFF',
            border:          'none',
            borderRadius:    '999px',
            padding:         '10px 20px',
            fontSize:        '15px',
            fontWeight:      600,
            fontFamily:      SF,
            cursor:          'pointer',
          }}
        >
          {step.cta}
        </button>
      </div>
    </div>
  )
}
