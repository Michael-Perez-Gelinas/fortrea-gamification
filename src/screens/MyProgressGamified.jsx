import { useState } from 'react'
import { CheckCircle, Trophy, Zap } from 'lucide-react'
import { colors } from '../tokens/colors'
import ScreenHeader from '../components/ScreenHeader'

import badgeSeniorMonitor          from '../assets/badges/badge-senior-monitor.png'
import badgeDocumentationExcellence from '../assets/badges/badge-documentation-excellence.png'
import badgeOnTimeSubmission        from '../assets/badges/badge-on-time-submission.png'
import badgeCloseOutSpecialist      from '../assets/badges/badge-close-out-specialist.png'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

const badges = [
  { image: badgeSeniorMonitor,           name: 'Senior Monitor',             xp: '+150 XP' },
  { image: badgeDocumentationExcellence, name: 'Documentation Excellence',   xp: '+100 XP' },
  { image: badgeOnTimeSubmission,        name: 'On-Time Submission',         xp: '+50 XP'  },
  { image: badgeCloseOutSpecialist,      name: 'Close-Out Specialist',       xp: '+200 XP' },
]

const leaderboardRows = [
  { rank: '#1', initials: 'RC', name: 'R. Chen',   xp: '4,820 XP', isYou: false },
  { rank: '#2', initials: 'MT', name: 'M. Torres', xp: '4,210 XP', isYou: false },
  { rank: '#3', initials: 'BL', name: 'YOU',       xp: '3,250 XP', isYou: true  },
  { rank: '#4', initials: 'JP', name: 'J. Park',   xp: '3,100 XP', isYou: false },
  { rank: '#5', initials: 'AO', name: 'A. Osei',   xp: '2,890 XP', isYou: false },
]

function SectionHeader({ icon, label, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        {icon}
        <span style={{ fontFamily: SF, fontSize: '17px', fontWeight: 600, color: colors.warmBlack }}>
          {label}
        </span>
      </div>
      {action}
    </div>
  )
}

function Card({ children, style }) {
  return (
    <div style={{
      backgroundColor: colors.white,
      borderRadius: '16px',
      boxShadow: shadowLarge,
      padding: '20px',
      ...style,
    }}>
      {children}
    </div>
  )
}

function Pill({ label, style }) {
  return (
    <span style={{
      backgroundColor: '#DFF7E1',
      color: colors.forest,
      fontSize: '12px',
      fontWeight: 500,
      fontFamily: SF,
      borderRadius: '999px',
      padding: '2px 8px',
      whiteSpace: 'nowrap',
      ...style,
    }}>
      {label}
    </span>
  )
}

function ActionLink({ label }) {
  return (
    <span style={{ fontFamily: SF, fontSize: '15px', color: colors.forest, cursor: 'pointer', whiteSpace: 'nowrap' }}>
      {label}
    </span>
  )
}

export default function MyProgressGamified({ setCurrentScreen }) {
  const [streakVisible, setStreakVisible] = useState(true)
  const [activeTab,     setActiveTab]     = useState('My Region')

  return (
    <div style={{ position: 'relative', minHeight: '100%', backgroundColor: '#FFFFFF' }}>

      {/* Background blob */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '340px',
        background: 'radial-gradient(ellipse 90% 60% at 50% 0%, #C8EBC9 0%, transparent 75%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        <ScreenHeader
          title="My Progress"
          onBack={() => setCurrentScreen('account')}
          rightAction="menu"
        />

        {/* Content */}
        <div style={{ padding: '0 16px 40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          {/* Hero card */}
          <Card>
            <div style={{ fontFamily: SF, fontSize: '20px', fontWeight: 600, color: colors.warmBlack, marginBottom: '6px' }}>
              CRA III - Site Leader
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ fontFamily: SF, fontSize: '15px', color: colors.neutralBody }}>Ben Low</span>
              <Pill label="Level 8" />
            </div>

            {/* XP bar */}
            <div style={{ marginBottom: '4px' }}>
              <div style={{ height: '8px', borderRadius: '999px', backgroundColor: colors.neutral100, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '81.25%', borderRadius: '999px', backgroundColor: colors.forest }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: SF, fontSize: '12px', color: colors.neutralBody }}>3,250 XP</span>
              <span style={{ fontFamily: SF, fontSize: '12px', color: colors.neutralBody }}>4,000 to Level 9</span>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              borderTop: `1px solid ${colors.neutral100}`,
              paddingTop: '12px',
              marginTop: '12px',
            }}>
              {[
                { value: '3,250', label: 'Total XP'  },
                { value: '12',    label: 'Badges'    },
                { value: '#3',    label: 'My Region' },
              ].map(({ value, label }, i) => (
                <div key={label} style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderLeft: i > 0 ? `1px solid ${colors.neutral100}` : 'none',
                }}>
                  <span style={{ fontFamily: SF, fontSize: '17px', fontWeight: 600, color: colors.warmBlack }}>
                    {value}
                  </span>
                  <span style={{ fontFamily: SF, fontSize: '12px', color: colors.neutralBody, marginTop: '2px' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Streak banner */}
          {streakVisible && (
            <div style={{
              backgroundColor: '#DFF7E1',
              borderRadius: '12px',
              padding: '12px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Zap size={20} color={colors.forest} />
                <div>
                  <div style={{ fontFamily: SF, fontSize: '15px', fontWeight: 600, color: colors.warmBlack }}>
                    12-Week Streak
                  </div>
                  <div style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody }}>
                    On-time submissions — keep it going
                  </div>
                </div>
              </div>
              <button
                onClick={() => setStreakVisible(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', lineHeight: 1 }}
              >
                <span style={{ fontFamily: SF, fontSize: '20px', color: colors.neutralBody, lineHeight: 1 }}>×</span>
              </button>
            </div>
          )}

          {/* Credentials Earned */}
          <section>
            <SectionHeader
              icon={<CheckCircle size={20} color={colors.forest} />}
              label="Credentials Earned"
              action={<ActionLink label="View All →" />}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {badges.map(({ image, name, xp }) => (
                <Card key={name} style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <img src={image} alt={name} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                  <span style={{ fontFamily: SF, fontSize: '13px', color: colors.warmBlack, textAlign: 'center', lineHeight: '17px' }}>
                    {name}
                  </span>
                  <Pill label={xp} />
                </Card>
              ))}
            </div>
          </section>

          {/* Leaderboard */}
          <section>
            <SectionHeader
              icon={<Trophy size={20} color={colors.forest} />}
              label="Leaderboard"
              action={<ActionLink label="See Full Board →" />}
            />
            <Card>
              {/* Tabs */}
              <div style={{ display: 'flex', gap: '8px', paddingBottom: '12px', borderBottom: `1px solid ${colors.neutral100}`, marginBottom: '4px' }}>
                {['My Region', 'My Team', 'Global'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0 0 8px',
                      fontFamily: SF,
                      fontSize: '15px',
                      color: activeTab === tab ? colors.forest : colors.neutralBody,
                      borderBottom: activeTab === tab ? `2px solid ${colors.forest}` : '2px solid transparent',
                      marginBottom: '-13px',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Rows */}
              {leaderboardRows.map(({ rank, initials, name, xp, isYou }, i) => (
                <div
                  key={rank}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: isYou ? '8px 12px' : '10px 0',
                    marginTop: isYou ? '2px' : 0,
                    marginBottom: isYou ? '2px' : 0,
                    marginLeft:  isYou ? '-12px' : 0,
                    marginRight: isYou ? '-12px' : 0,
                    backgroundColor: isYou ? '#DFF7E1' : 'transparent',
                    borderRadius: isYou ? '8px' : 0,
                    borderBottom: !isYou && i < leaderboardRows.length - 1 ? `1px solid ${colors.neutral100}` : 'none',
                  }}
                >
                  <span style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody, minWidth: '24px' }}>
                    {rank}
                  </span>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    backgroundColor: colors.neutral100,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: SF, fontSize: '12px', fontWeight: 600, color: colors.neutralBody }}>
                      {initials}
                    </span>
                  </div>
                  <span style={{ fontFamily: SF, fontSize: '15px', color: isYou ? colors.forest : colors.warmBlack, flex: 1, fontWeight: isYou ? 600 : 400 }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: SF, fontSize: '15px', fontWeight: 600, color: colors.warmBlack, textAlign: 'right' }}>
                    {xp}
                  </span>
                </div>
              ))}
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
