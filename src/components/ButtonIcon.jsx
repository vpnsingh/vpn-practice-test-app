const ICON_PATHS = {
  arrowLeft: 'M19 12H5m7 7-7-7 7-7',
  arrowRight: 'M5 12h14m-7-7 7 7-7 7',
  book: 'M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21zm0 0V21',
  check: 'm5 12 4 4L19 6',
  clock: 'M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  compass: 'm15.5 8.5-2 5-5 2 2-5 5-2ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  download: 'M12 3v12m0 0 5-5m-5 5-5-5M4 17v4h16v-4',
  home: 'm3 10 9-7 9 7M5 9v12h14V9m-9 12v-7h4v7',
  open: 'M14 4h6v6m0-6-9 9m5 1v6H4V8h6',
  play: 'm8 5 12 7-12 7V5Z',
  restart: 'M3 11a9 9 0 0 1 15.4-5.4L21 8m0-5v5h-5m5 5a9 9 0 0 1-15.4 5.4L3 16m0 5v-5h5',
  study: 'M3 5h18M3 12h18M3 19h18M7 3v4m10 3v4m-6 3v4'
}

function ButtonIcon({ name }) {
  return (
    <svg
      className="button-icon"
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
