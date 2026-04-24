import { colors } from '../tokens/colors'

function HomeIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 9.5L12 3L21 9.5V21H15V15H9V21H3V9.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

function ChatIcon({ color }) {
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none">
      <path
        d="M4 4h16v12H7.5L4 19.5V4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* AI sparkle — four-point star superimposed top-right of bubble */}
      <path
        d="M22 0 L22.5 1.8 L24 2.3 L22.5 2.8 L22 4.5 L21.5 2.8 L20 2.3 L21.5 1.8 Z"
        fill={color}
      />
    </svg>
  )
}

function StudiesIcon({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="3" width="12" height="16" rx="1.5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M8 7h6M8 10h6M8 13h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="17" r="3.5" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M19.5 19.5L21.5 21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

const tabs = [
  { id: 'home',    label: 'Home',       Icon: HomeIcon },
  { id: 'chat',    label: 'Chat',       Icon: ChatIcon },
  { id: 'studies', label: 'My Studies', Icon: StudiesIcon },
]

export default function TabBar({ currentScreen, setCurrentScreen }) {
  const activeTab =
    currentScreen === 'chat'    ? 'chat' :
    currentScreen === 'studies' ? 'studies' :
    'home'

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      height: '83px',
      backgroundColor: colors.neutral50,
      borderTop: `1px solid ${colors.neutral100}`,
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: '10px',
      zIndex: 100,
    }}>
      {tabs.map(({ id, label, Icon }) => {
        const isActive = activeTab === id
        const color = isActive ? colors.forest : colors.neutralBody
        return (
          <button
            key={id}
            onClick={() => setCurrentScreen(id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              color,
            }}
          >
            <Icon color={color} />
            <span style={{
              fontSize: '10px',
              fontWeight: isActive ? 600 : 400,
              lineHeight: '13px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
              color,
            }}>
              {label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
