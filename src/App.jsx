import { useState } from 'react'
import { colors } from './tokens/colors'
import TabBar from './components/TabBar'
import Onboarding from './screens/Onboarding'

function Placeholder({ label, setCurrentScreen }) {
  return (
    <div style={{
      padding: '24px 16px',
      color: colors.neutralBody,
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
    }}>
      {label} — coming soon
      {label === 'Home' && (
        <div style={{ marginTop: '24px' }}>
          <button
            onClick={() => setCurrentScreen('onboarding')}
            style={{
              padding: '8px 16px',
              fontSize: '12px',
              backgroundColor: '#1a1a2e',
              color: '#00ff88',
              border: '1px solid #00ff88',
              borderRadius: '6px',
              cursor: 'pointer',
              fontFamily: 'monospace',
            }}
          >
            ⟳ Restart Onboarding
          </button>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('onboarding')

  const showTabBar = currentScreen !== 'cov-modal' && currentScreen !== 'onboarding'

  return (
    <div style={{
      width: '100%',
      height: '100dvh',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: colors.canvas,
      display: 'flex',
      flexDirection: 'column',
    }}>
        <div style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: showTabBar ? '83px' : 0,
        }}>
          {currentScreen === 'onboarding' && <Onboarding setCurrentScreen={setCurrentScreen} />}
          {currentScreen === 'home'       && <Placeholder label="Home" setCurrentScreen={setCurrentScreen} />}
          {currentScreen === 'chat'       && <Placeholder label="Chat" />}
          {currentScreen === 'studies'    && <Placeholder label="My Studies" />}
        </div>

        {showTabBar && (
          <TabBar
            currentScreen={currentScreen}
            setCurrentScreen={setCurrentScreen}
          />
        )}
    </div>
  )
}
