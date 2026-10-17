import ButtonIcon from '../components/ButtonIcon'

function HomePage({ tests, onOpenTest }) {
  return (
    <div className="app-shell home-screen">
      <div className="card home-card">
        <div className="home-topbar">
          <div className="brand-lockup">
            <span className="brand-badge">VPN</span>
            <span className="brand-text">Practice Test App</span>
          </div>
          <div className="status-pill">Live prep dashboard</div>
        </div>

        <div className="home-layout">
          <div className="hero-copy-panel">
            <p className="eyebrow">Certified readiness</p>
            <h1>Practice with purpose. Pass with confidence.</h1>
            <p className="lead">
              Build exam confidence through structured GH-300 and Claude Associate practice sets designed to keep your learning focused, measurable, and momentum-driven.
            </p>

            <div className="cta-row">
              <button className="primary-button" onClick={() => onOpenTest('gh300')}>
                <ButtonIcon name="play" /> Start GH-300
              </button>
              <button className="secondary-button" onClick={() => onOpenTest('claude-associate')}>
                <ButtonIcon name="compass" /> Explore Claude Sets
              </button>
            </div>

            <div className="metrics-strip">
              <div className="metric-box"><strong>3</strong><span>Tracks</span></div>
              <div className="metric-box"><strong>180</strong><span>GH-300</span></div>
              <div className="metric-box"><strong>80%</strong><span>Pass goal</span></div>
            </div>
          </div>

          <div className="hero-visual-panel" aria-label="Practice dashboard illustration">
            <svg className="hero-illustration" viewBox="0 0 520 440" role="img" aria-hidden="true">
              <defs>
                <linearGradient id="heroGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#7c6df5" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
                <linearGradient id="heroPanel" x1="0%" x2="100%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#edf2ff" stopOpacity="0.7" />
                </linearGradient>
              </defs>

              <circle cx="260" cy="220" r="170" fill="url(#heroGlow)" opacity="0.12" />
              <circle cx="260" cy="220" r="138" fill="none" stroke="rgba(124,109,245,0.35)" strokeWidth="1.5" strokeDasharray="8 12" className="orbit orbit-large" />
              <circle cx="260" cy="220" r="96" fill="none" stroke="rgba(20,184,166,0.35)" strokeWidth="1.5" strokeDasharray="5 10" className="orbit orbit-small" />
              <g className="floating-node node-1"><circle cx="130" cy="120" r="9" fill="#4f46e5" /></g>
              <g className="floating-node node-2"><circle cx="370" cy="130" r="11" fill="#14b8a6" /></g>
              <g className="floating-node node-3"><circle cx="390" cy="300" r="8" fill="#a78bfa" /></g>

              <g className="dashboard-card">
                <rect x="150" y="120" width="220" height="160" rx="28" fill="url(#heroPanel)" stroke="rgba(79,70,229,0.18)" />
                <rect x="178" y="150" width="120" height="12" rx="6" fill="rgba(79,70,229,0.18)" />
                <rect x="178" y="174" width="150" height="12" rx="6" fill="rgba(148,163,184,0.2)" />
                <rect x="178" y="202" width="74" height="12" rx="6" fill="rgba(20,184,166,0.2)" />
                <rect x="178" y="232" width="160" height="12" rx="6" fill="rgba(148,163,184,0.2)" />
                <circle cx="315" cy="184" r="34" fill="url(#heroGlow)" opacity="0.92" />
                <path d="M305 184l7 8 18-20" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>
              <g className="mini-panel">
                <rect x="82" y="260" width="120" height="70" rx="18" fill="rgba(255,255,255,0.78)" stroke="rgba(79,70,229,0.12)" />
                <rect x="110" y="286" width="54" height="8" rx="4" fill="rgba(79,70,229,0.18)" />
                <rect x="110" y="304" width="62" height="8" rx="4" fill="rgba(148,163,184,0.22)" />
              </g>
              <g className="mini-panel">
                <rect x="320" y="260" width="126" height="70" rx="18" fill="rgba(255,255,255,0.78)" stroke="rgba(20,184,166,0.15)" />
                <rect x="348" y="284" width="64" height="8" rx="4" fill="rgba(20,184,166,0.2)" />
                <rect x="348" y="302" width="52" height="8" rx="4" fill="rgba(148,163,184,0.22)" />
              </g>
            </svg>
          </div>
        </div>

        <div className="feature-row">
          <div className="feature-card">
            <span>Study flow</span>
            <strong>Learn question by question</strong>
            <p>Review every available question with its correct answer shown.</p>
          </div>
          <div className="feature-card highlight-card">
            <span>Focus</span>
            <strong>Immediate feedback</strong>
            <p>Review explanations fast and sharpen the concepts that matter most.</p>
          </div>
          <div className="feature-card">
            <span>Progress</span>
            <strong>Track confidence</strong>
            <p>Measure your score, revisit weak areas, and keep momentum high.</p>
          </div>
        </div>

        <div className="test-grid">
          {tests.map((test) => (
            <div key={test.key} className={`test-card ${test.ready ? 'ready' : 'coming-soon'}`}>
              <div className="test-card-header">
                <span className={`status-badge ${test.ready ? 'ready' : 'coming-soon'}`}>{test.status}</span>
              </div>
              <h2>{test.name}</h2>
              <p>{test.description}</p>
              {test.ready ? (
                <button className="primary-button full-width" onClick={() => onOpenTest(test.key)}><ButtonIcon name="open" /> Open Test</button>
              ) : (
                <button className="secondary-button full-width disabled" disabled><ButtonIcon name="clock" /> Coming Soon</button>
              )}
            </div>
          ))}
        </div>

        <div className="home-footer">
          <p>{'Best score wins! \u2705 Pass with 80% or more.'}</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
