import { ChevronLeft, Bell, MoreVertical } from 'lucide-react'
import { colors } from '../tokens/colors'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'

// Frosted glass header — matches Home's existing sticky nav exactly.
// backdrop-filter and rgba background are always on (no scroll threshold).
//
// Props:
//   title        — large GT Ultra Median heading
//   subtitle     — small SF text rendered above title (optional)
//   onBack       — if provided, renders ChevronLeft on the left
//   leftIcon     — custom left element instead of chevron (e.g. UserCircle)
//   onLeftAction — tap handler for leftIcon
//   rightAction  — 'bell' | 'menu' | 'none'
//   onRightAction — tap handler for right icon

export default function ScreenHeader({
  title,
  subtitle,
  onBack,
  leftIcon,
  onLeftAction,
  rightAction   = 'none',
  onRightAction,
}) {
  return (
    <div style={{
      position:              'sticky',
      top:                   0,
      zIndex:                10,
      backdropFilter:        'blur(12px)',
      WebkitBackdropFilter:  'blur(12px)',
      backgroundColor:       'rgba(249,245,241,0.75)',
    }}>
      {/* Icon row */}
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        padding:        '8px 16px 4px',
      }}>
        {/* Left */}
        {onBack ? (
          <button
            onClick={onBack}
            style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          >
            <ChevronLeft size={28} color={colors.warmBlack} />
          </button>
        ) : leftIcon ? (
          <button
            onClick={onLeftAction}
            style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer' }}
          >
            {leftIcon}
          </button>
        ) : (
          <div style={{ width: '28px' }} />
        )}

        {/* Right */}
        {rightAction === 'bell' && (
          <button
            onClick={onRightAction}
            style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer' }}
          >
            <Bell size={20} color={colors.warmBlack} />
          </button>
        )}
        {rightAction === 'menu' && (
          <button
            onClick={onRightAction}
            style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer' }}
          >
            <MoreVertical size={20} color={colors.warmBlack} />
          </button>
        )}
        {rightAction === 'none' && <div style={{ width: '28px' }} />}
      </div>

      {/* Title row */}
      <div style={{ padding: '6px 16px 14px' }}>
        {subtitle && (
          <div style={{
            fontFamily:    SF,
            fontSize:      '13px',
            fontWeight:    400,
            color:         colors.neutralBody,
            letterSpacing: '-0.08px',
            marginBottom:  '2px',
          }}>
            {subtitle}
          </div>
        )}
        <div style={{
          fontFamily:    GT,
          fontSize:      '34px',
          fontWeight:    400,
          color:         colors.warmBlack,
          letterSpacing: '0.8px',
          lineHeight:    '41px',
        }}>
          {title}
        </div>
      </div>
    </div>
  )
}
