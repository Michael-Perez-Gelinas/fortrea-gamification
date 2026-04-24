import { UserCircle, Bell, Building2, FileText, Calendar, Info, ScanLine } from 'lucide-react'
import { colors } from '../tokens/colors'

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif'
const GT = '"GT Ultra Median", Georgia, serif'

const shadowLarge = '0px -1px 3px rgba(0,0,0,0.05), 0px 5px 5px rgba(0,0,0,0.04), 0px 12px 7px rgba(0,0,0,0.03), 0px 21px 9px rgba(0,0,0,0.01), 0px 33px 9px rgba(0,0,0,0)'

// ─── Section Header ───────────────────────────────────────────────────────────

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

// ─── Card wrapper ─────────────────────────────────────────────────────────────

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

// ─── Today's Visit Card ───────────────────────────────────────────────────────

function TodaysVisitCard() {
  return (
    <Card>
      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
        <div>
          <div style={{ fontFamily: SF, fontSize: '20px', fontWeight: 600, color: colors.warmBlack, lineHeight: '25px' }}>
            Site 879
          </div>
          <div style={{ fontFamily: SF, fontSize: '15px', fontWeight: 400, color: colors.neutralBody }}>
            KAM7823
          </div>
        </div>
        <span style={{
          backgroundColor: colors.neutral100,
          color: '#322727',
          fontSize: '13px',
          fontWeight: 600,
          fontFamily: SF,
          borderRadius: '999px',
          padding: '4px 8px',
          whiteSpace: 'nowrap',
        }}>
          On-site COV
        </span>
      </div>

      {/* Location */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ fontFamily: SF, fontSize: '15px', fontWeight: 600, color: colors.warmBlack, marginBottom: '2px' }}>
          Massey Cancer Center
        </div>
        <div style={{ fontFamily: SF, fontSize: '15px', color: '#007AFF' }}>
          700 Main Street, Richmond, VA, 23911
        </div>
      </div>

      {/* Contacts box */}
      <div style={{
        backgroundColor: colors.neutral50,
        borderRadius: '12px',
        padding: '12px',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}>
        {[
          {
            label: 'Study\nCoordinator',
            name: 'Sarah Johnson',
            email: 'sarah.johnson@email.com',
            phone: '217-555-1234',
          },
          {
            label: 'Principal\nInvestigator',
            name: 'Dr. Carol Lee',
            email: 'carol.lee@email.com',
            phone: null,
          },
        ].map((contact) => (
          <div key={contact.label} style={{ display: 'flex', gap: '8px' }}>
            <div style={{
              width: '80px',
              flexShrink: 0,
              fontFamily: SF,
              fontSize: '13px',
              color: colors.neutralBody,
              whiteSpace: 'pre-line',
              lineHeight: '17px',
            }}>
              {contact.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              <span style={{ fontFamily: SF, fontSize: '13px', color: colors.warmBlack }}>{contact.name}</span>
              <span style={{ fontFamily: SF, fontSize: '13px', color: '#007AFF' }}>{contact.email}</span>
              {contact.phone && (
                <span style={{ fontFamily: SF, fontSize: '13px', color: '#007AFF' }}>{contact.phone}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: SF, fontSize: '16px', fontWeight: 600, color: colors.warmBlack }}>
            Site Visit Log
          </span>
          <Info size={16} color={colors.neutralBody} />
        </div>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: colors.forest,
          color: colors.white,
          border: 'none',
          borderRadius: '40px',
          padding: '7px 14px',
          fontSize: '15px',
          fontWeight: 600,
          fontFamily: SF,
          cursor: 'pointer',
        }}>
          <ScanLine size={15} color={colors.white} />
          Scan
        </button>
      </div>
    </Card>
  )
}

// ─── Trip Reports Card ────────────────────────────────────────────────────────

function TripReportsCard() {
  return (
    <>
      <Card>
        {/* Status row */}
        <div style={{
          display: 'flex',
          backgroundColor: colors.neutral50,
          border: `1px solid ${colors.neutral100}`,
          borderRadius: '12px',
          marginBottom: '16px',
          overflow: 'hidden',
        }}>
          {[
            { count: '0', label: 'Not Started' },
            { count: '1', label: 'In Progress' },
            { count: '0', label: 'In Review' },
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

        {/* Priority section */}
        <div>
          <div style={{ fontFamily: SF, fontSize: '12px', fontWeight: 500, color: '#726B6B', marginBottom: '8px' }}>
            Priority
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontFamily: SF, fontSize: '12px', color: colors.neutralBody }}>
                July 7, On-site COV
              </span>
              <span style={{ fontFamily: SF, fontSize: '16px', fontWeight: 600, color: colors.warmBlack }}>
                Site 879
              </span>
              <span style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody }}>
                KAM7823
              </span>
            </div>
            <span style={{
              backgroundColor: '#FEEDEC',
              color: '#982B23',
              fontSize: '12px',
              fontFamily: SF,
              borderRadius: '999px',
              padding: '4px 10px',
              whiteSpace: 'nowrap',
            }}>
              Final Overdue
            </span>
          </div>
        </div>
      </Card>

      {/* Sync note — outside card */}
      <p style={{
        fontFamily: SF,
        fontSize: '13px',
        color: colors.neutralBody,
        textAlign: 'center',
        margin: 0,
        paddingTop: '8px',
      }}>
        Your list only — Veeva syncs within 24–48 hrs.
      </p>
    </>
  )
}

// ─── Upcoming Visits Card ─────────────────────────────────────────────────────

function UpcomingVisitsCard() {
  const visits = [
    { site: 'Site 204', id: 'PR9405',  date: 'August 23, 2025',    type: null },
    { site: 'Site 490', id: 'K92804',  date: 'September 2, 2025',  type: 'Remote RMV' },
    { site: 'Site 103', id: 'GIE9013', date: 'September 13, 2025', type: 'Remote RMV' },
  ]
  return (
    <Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {visits.map((v) => (
          <div key={v.id} style={{
            backgroundColor: colors.neutral50,
            borderRadius: '12px',
            padding: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ fontFamily: SF, fontSize: '16px', fontWeight: 600, color: colors.warmBlack }}>
                {v.site}
              </div>
              <div style={{ fontFamily: SF, fontSize: '13px', color: colors.neutralBody }}>
                {v.id}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: SF, fontSize: '16px', color: colors.warmBlack }}>
                {v.date}
              </div>
              {v.type && (
                <div style={{ fontFamily: SF, fontSize: '12px', color: colors.neutralBody }}>
                  {v.type}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
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

      {/* Sticky nav */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(249,245,241,0.75)',
      }}>
        {/* User / bell row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 16px 4px',
        }}>
          <button style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer' }}>
            <UserCircle size={20} color={colors.warmBlack} />
          </button>
          <button style={{ background: 'none', border: 'none', padding: '10px', margin: '-10px', cursor: 'pointer' }}>
            <Bell size={20} color={colors.warmBlack} />
          </button>
        </div>

        {/* Date / greeting row */}
        <div style={{ padding: '6px 16px 14px' }}>
          <div style={{
            fontFamily: SF,
            fontSize: '13px',
            fontWeight: 400,
            color: colors.neutralBody,
            letterSpacing: '-0.08px',
            marginBottom: '2px',
          }}>
            Wed, February 12
          </div>
          <div style={{
            fontFamily: GT,
            fontSize: '34px',
            fontWeight: 400,
            color: colors.warmBlack,
            letterSpacing: '0.4px',
            lineHeight: '41px',
          }}>
            Hi, Steven
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        padding: '8px 16px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        paddingBottom: '32px',
      }}>
        <section>
          <SectionHeader icon={<Building2 size={20} color={colors.forest} />} label="Today's Visit" />
          <TodaysVisitCard />
        </section>

        <section>
          <SectionHeader icon={<FileText size={20} color={colors.forest} />} label="Trip Reports" />
          <TripReportsCard />
        </section>

        <section>
          <SectionHeader icon={<Calendar size={20} color={colors.forest} />} label="Upcoming Visits" />
          <UpcomingVisitsCard />
        </section>
      </div>
    </div>
  )
}
