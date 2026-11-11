import { useEffect, useState } from 'react'
import ButtonIcon from './ButtonIcon'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme || 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('vpn-theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  const isDark = theme === 'dark'
  return (
    <button
      className="icon-button theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Light theme' : 'Dark theme'}
    >
      <ButtonIcon name={isDark ? 'sun' : 'moon'} />
    </button>
  )
}

function AppHeader({ crumbs = [], onHome, actions }) {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <button className="brand" onClick={onHome} aria-label="Go to dashboard">
          <span className="brand-mark" aria-hidden="true">
            <ButtonIcon name="sparkle" />
          </span>
          <span className="brand-name">VPN <em>Practice</em></span>
        </button>

        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => (
              <span key={`${crumb}-${index}`} className="crumb">
                <span className="crumb-sep" aria-hidden="true">/</span>
                <span className="crumb-text">{crumb}</span>
              </span>
            ))}
          </nav>
        )}

        <div className="app-header-actions">
          {actions}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default AppHeader
