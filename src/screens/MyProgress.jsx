import { FileText, Flag, Bookmark } from 'lucide-react'
import { colors } from '../tokens/colors'
import ScreenHeader from '../components/ScreenHeader'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

function SectionHeader({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
      {icon}
      <span style={{ fontFamily: SF, fontSize: '17px', fontWeight: 600, color: colors.warmBlack }}>
        {label}
      </span>
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

function StatCard({ number, label }) {
  return (
    <Card style={{ flex: 1 }}>
      <div style={{ fontFamily: SF, fontSize: '34px', fontWeight: 600, color: colors.warmBlack, lineHeight: '41px' }}>
        {number}
      </div>
      <div style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody, marginTop: '4px', lineHeight: '18px' }}>
        {label}
      </div>
    </Card>
  )
}

export default function MyProgress({ setCurrentScreen }) {
  return (
    <div style={{ position: 'relative', minHeight: '100%' }}>

      {/* Background blob */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '340px',
        background: 'radial-gradient(ellipse 90% 60% at 50% 0%, #C8EBC9 0%, transparent 75%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        <ScreenHeader
          title="My Progress"
          onBack={() => setCurrentScreen('account')}
        />

        {/* Content */}
        <div style={{
          padding: '0 16px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}>

          {/* Trip Reports */}
          <section>
            <SectionHeader
              icon={<FileText size={20} color={colors.forest} />}
              label="Trip Reports"
            />
            <Card>
              {/* Hero stat */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div>
                  <div style={{ fontFamily: SF, fontSize: '48px', fontWeight: 600, color: colors.warmBlack, lineHeight: '52px' }}>
                    89%
                  </div>
                  <div style={{ fontFamily: SF, fontSize: '15px', color: colors.neutralBody, marginTop: '4px' }}>
                    On-Time Submission Rate
                  </div>
                </div>
                <span style={{
                  backgroundColor: '#DFF7E1',
                  color: colors.forest,
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: SF,
                  borderRadius: '999px',
                  padding: '4px 10px',
                  whiteSpace: 'nowrap',
                  marginTop: '6px',
                }}>
                  +4% vs last quarter
                </span>
              </div>

              {/* Status row */}
              <div style={{
                display: 'flex',
                backgroundColor: colors.neutral50,
                border: `1px solid ${colors.neutral100}`,
                borderRadius: '12px',
                overflow: 'hidden',
              }}>
                {[
                  { count: '10', label: 'Submitted' },
                  { count: '8',  label: 'Passed'    },
                  { count: '2',  label: 'In Review'  },
                ].map(({ count, label }, i) => (
                  <div key={label} style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '12px 8px',
                    borderLeft: i > 0 ? `1px solid ${colors.neutral100}` : 'none',
                  }}>
                    <span style={{ fontFamily: SF, fontSize: '15px', fontWeight: 600, color: colors.warmBlack }}>
                      {count}
                    </span>
                    <span style={{ fontFamily: SF, fontSize: '11px', color: colors.neutralBody, marginTop: '2px' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Field Activity */}
          <section>
            <SectionHeader
              icon={<Flag size={20} color={colors.forest} />}
              label="Field Activity"
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <StatCard number="12"  label="Site Visits this Quarter"  />
              <StatCard number="245" label="Career Total Site Visits"   />
            </div>
          </section>

          {/* Close Out Visits */}
          <section>
            <SectionHeader
              icon={<Bookmark size={20} color={colors.forest} />}
              label="Close Out Visits"
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              <StatCard number="20" label="Career Total" />
              <StatCard number="1"  label="This Year"    />
            </div>
          </section>

          {/* Footer */}
          <div style={{ textAlign: 'center', paddingTop: '24px' }}>
            <div style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody, lineHeight: '18px' }}>
              Last updated: Today at 9:41 AM
            </div>
            <div style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody, marginTop: '2px' }}>
              Viva data syncs every 24–48 hours
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
