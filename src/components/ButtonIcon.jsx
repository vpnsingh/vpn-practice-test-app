const ICON_PATHS = {
  arrowLeft: 'M19 12H5m7 7-7-7 7-7',
  arrowRight: 'M5 12h14m-7-7 7 7-7 7',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zm0 0V21',
  chart: 'M4 20V10m6 10V4m6 16v-7m4 7H2',
  check: 'm5 12 4 4L19 6',
  clock: 'M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  compass: 'm15.5 8.5-2 5-5 2 2-5 5-2ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  download: 'M12 3v12m0 0 5-5m-5 5-5-5M4 17v4h16v-4',
  home: 'm3 10 9-7 9 7M5 9v12h14V9m-9 12v-7h4v7',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  moon: 'M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z',
  open: 'M14 4h6v6m0-6-9 9m5 1v6H4V8h6',
  play: 'm8 5 12 7-12 7V5Z',
  restart: 'M3 11a9 9 0 0 1 15.4-5.4L21 8m0-5v5h-5m5 5a9 9 0 0 1-15.4 5.4L3 16m0 5v-5h5',
  sparkle: 'M12 3c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7Zm7 12c.3 1.8 1.2 2.7 3 3-1.8.3-2.7 1.2-3 3-.3-1.8-1.2-2.7-3-3 1.8-.3 2.7-1.2 3-3Z',
  study: 'M3 5h18M3 12h18M3 19h18M7 3v4m10 3v4m-6 3v4',
  sun: 'M12 3v2m0 14v2M5.6 5.6 7 7m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17m10-10 1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  x: 'M6 6l12 12M18 6 6 18'
}

function ButtonIcon({ name, className = '' }) {
  return (
    <svg
      className={`button-icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  )
}

export default ButtonIcon
