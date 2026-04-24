import { CheckCircle } from 'lucide-react'
import { colors } from '../tokens/colors'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'

export default function EmptyState() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% 40%, rgba(11,193,28,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '0 32px',
        textAlign: 'center',
      }}>
        <CheckCircle size={52} color={colors.forest} strokeWidth={1.5} />

        <div style={{
          fontFamily: GT,
          fontSize: '34px',
          fontWeight: 400,
          color: colors.warmBlack,
          lineHeight: '41px',
          letterSpacing: '0.4px',
        }}>
          All caught up.
        </div>

        <div style={{
          fontFamily: SF,
          fontSize: '17px',
          fontWeight: 400,
          color: colors.neutralBody,
          lineHeight: '22px',
        }}>
          No pending trip reports.
        </div>
      </div>
    </div>
  )
}
