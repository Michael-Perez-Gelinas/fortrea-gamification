import { IdCard, BarChart2, Lock, HelpCircle, LogOut, ChevronRight } from 'lucide-react'
import { colors } from '../tokens/colors'
import ScreenHeader from '../components/ScreenHeader'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'
const cardShadow = '0 0 4px rgba(0,0,0,0.04)'

function IconBadge({ icon }) {
  return (
    <div style={{
      backgroundColor: '#DFF7E1',
      borderRadius: '24px',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      {icon}
    </div>
  )
}

function SectionHeader({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
      <IconBadge icon={icon} />
      <span style={{ fontFamily: SF, fontSize: '17px', fontWeight: 600, color: colors.warmBlack }}>
        {label}
      </span>
    </div>
  )
}

function Card({ children }) {
  return (
    <div style={{
      backgroundColor: colors.white,
      borderRadius: '12px',
      boxShadow: cardShadow,
      overflow: 'hidden',
    }}>
      {children}
    </div>
  )
}

function Toggle({ on = true }) {
  return (
    <div style={{
      width: '64px',
      height: '28px',
      borderRadius: '100px',
      backgroundColor: on ? '#34C759' : colors.neutral200,
      position: 'relative',
      flexShrink: 0,
      transition: 'background-color 200ms ease',
    }}>
      <div style={{
        position: 'absolute',
        top: '3px',
        left: on ? 'calc(100% - 25px)' : '3px',
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        backgroundColor: colors.white,
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        transition: 'left 200ms ease',
      }} />
    </div>
  )
}

export default function Account({ setCurrentScreen }) {
  return (
    <div style={{
      backgroundColor: colors.neutral50,
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: SF,
    }}>

      <ScreenHeader
        title="Account"
        onBack={() => setCurrentScreen('home')}
      />

      {/* Scrollable content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '0 16px 40px',
      }}>

        {/* Account Information */}
        <section>
          <SectionHeader
            icon={<IdCard size={20} color={colors.forest} />}
            label="Account Information"
          />
          <Card>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '17px', fontWeight: 600, color: '#000000', marginBottom: '4px' }}>
                Steven Lin
              </div>
              <div style={{ fontSize: '13px', color: 'rgba(60,60,67,0.6)' }}>
                steven.lin@fortrea.com
              </div>
            </div>
          </Card>
        </section>

        {/* My Progress */}
        <section>
          <SectionHeader
            icon={<BarChart2 size={20} color={colors.forest} />}
            label="My Progress"
          />
          <Card>
            <button
              onClick={() => setCurrentScreen('myProgress')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: '17px', color: colors.warmBlack }}>
                View My Progress
              </span>
              <ChevronRight size={24} color={colors.neutralBody} />
            </button>
            <div style={{ height: '1px', backgroundColor: colors.neutral100 }} />
            <button
              onClick={() => setCurrentScreen('myProgressGamified')}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 8px 12px 16px',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '17px', color: colors.warmBlack }}>My Progress</div>
                <div style={{ fontSize: '12px', color: colors.neutralBody, marginTop: '2px' }}>Gamified view</div>
              </div>
              <ChevronRight size={24} color={colors.neutralBody} />
            </button>
          </Card>
        </section>

        {/* Security */}
        <section>
          <SectionHeader
            icon={<Lock size={20} color={colors.forest} />}
            label="Security"
          />
          <Card>
            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '17px', color: colors.warmBlack, marginBottom: '4px' }}>
                  Face ID / Touch ID
                </div>
                <div style={{ fontSize: '12px', color: colors.neutralBody, lineHeight: '16px' }}>
                  Enabling biometrics allows you to access the app even when you're offline.
                </div>
              </div>
              <Toggle on={true} />
            </div>
          </Card>
        </section>

        {/* App Support */}
        <section>
          <SectionHeader
            icon={<HelpCircle size={20} color={colors.forest} />}
            label="App Support"
          />
          <Card>
            {[
              { title: 'Contact Us',   sub: 'Contact Service Desk via chat.' },
              { title: 'Help Center',  sub: 'Find answers to common questions.' },
            ].map(({ title, sub }, i) => (
              <div key={title}>
                {i > 0 && (
                  <div style={{ height: '1px', backgroundColor: colors.neutral100, margin: '0 16px' }} />
                )}
                <button style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 8px 12px 16px',
                  textAlign: 'left',
                }}>
                  <div>
                    <div style={{ fontSize: '17px', color: colors.warmBlack, marginBottom: '2px' }}>
                      {title}
                    </div>
                    <div style={{ fontSize: '12px', color: colors.neutralBody }}>
                      {sub}
                    </div>
                  </div>
                  <ChevronRight size={20} color={colors.neutralBody} />
                </button>
              </div>
            ))}
          </Card>
        </section>

        {/* Log Out */}
        <button style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '16px',
          width: '100%',
        }}>
          <LogOut size={20} color={colors.forest} />
          <span style={{ fontSize: '16px', fontWeight: 600, color: colors.forest }}>
            Log Out
          </span>
        </button>

      </div>
    </div>
  )
}
