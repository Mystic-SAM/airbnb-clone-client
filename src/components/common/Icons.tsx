
export function AirbnbLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 102 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', height: '32px', width: 'auto' }}
      aria-hidden="true"
    >
      <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.35-.79c-.08-.18-.17-.38-.25-.56-.9-2.04-1.83-4.14-2.82-6.28-1.78-3.83-3.79-7.39-5.96-10.59C17.39.42 16.12 0 14.62 0c-1.5 0-2.77.42-4.03 1.64C8.42 4.84 6.41 8.4 4.63 12.23 3.64 14.37 2.71 16.47 1.81 18.51c-.08.18-.17.38-.25.56l-.35.79-.74 1.67c-.16.35-.31.76-.47 1.15C-.4 23.63-.4 24.6.4 25.56c.8 1 2.05 1.54 3.39 1.54 1.77 0 3.66-.75 5.6-2.22 1.48-1.13 2.92-2.52 4.29-4.14.34-.41.67-.83.94-1.21.27.38.6.8.94 1.21 1.37 1.62 2.81 3.01 4.29 4.14 1.94 1.47 3.83 2.22 5.6 2.22 1.34 0 2.59-.54 3.39-1.54.8-.96.8-1.93.4-2.88zm-14.62-5.46c-1.25 1.57-2.53 2.87-3.79 3.84-1.48 1.13-2.86 1.7-4.11 1.7-.63 0-1.13-.23-1.45-.66-.31-.43-.37-.96-.16-1.51.13-.33.26-.68.4-1.01l.73-1.64.36-.8c.08-.18.17-.38.25-.56.88-1.99 1.79-4.04 2.75-6.12 1.59-3.46 3.37-6.62 5.28-9.43 1.91 2.81 3.69 5.97 5.28 9.43.96 2.08 1.87 4.13 2.75 6.12.08.18.17.38.25.56l.36.8.73 1.64c.14.33.27.68.4 1.01.21.55.15 1.08-.16 1.51-.32.43-.82.66-1.45.66-1.25 0-2.63-.57-4.11-1.7-1.26-.97-2.54-2.27-3.79-3.84zM14.62 10.4c-1.42 0-2.58 1.16-2.58 2.58s1.16 2.58 2.58 2.58 2.58-1.16 2.58-2.58-1.16-2.58-2.58-2.58z"/>
      <text x="36" y="24" fontFamily="Circular, -apple-system, sans-serif" fontSize="22" fontWeight="bold" fill="currentColor">airbnb</text>
    </svg>
  );
}

export function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" aria-hidden="true">
      <circle cx="14" cy="14" r="9" />
      <path d="M21 21l7 7" />
    </svg>
  );
}

export function GlobeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm5.93 7h-2.5a13.3 13.3 0 0 0-.91-4.07A6.98 6.98 0 0 1 13.93 7zm-5.93-5.9c.9 1.25 1.57 3.32 1.8 4.9H6.2c.23-1.58.9-3.65 1.8-4.9zM2.07 7a6.98 6.98 0 0 1 3.41-4.07A13.3 13.3 0 0 0 4.57 7h-2.5zm0 2h2.5a13.3 13.3 0 0 0 .91 4.07A6.98 6.98 0 0 1 2.07 9zm5.93 5.9c-.9-1.25-1.57-3.32-1.8-4.9h3.6c-.23 1.58-.9 3.65-1.8 4.9zm2.48-1.83a13.3 13.3 0 0 0 .91-4.07h2.5a6.98 6.98 0 0 1-3.41 4.07z" />
    </svg>
  );
}

export function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="9" x2="28" y2="9" />
      <line x1="4" y1="16" x2="28" y2="16" />
      <line x1="4" y1="23" x2="28" y2="23" />
    </svg>
  );
}

export function ShareIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        height: '16px',
        width: '16px',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        overflow: 'visible'
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289" />
    </svg>
  );
}

export function HeartIcon({ isFilled = false, className = '' }: { isFilled?: boolean; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        height: '16px',
        width: '16px',
        fill: isFilled ? 'var(--rausch)' : 'none',
        stroke: isFilled ? 'var(--rausch)' : 'currentColor',
        strokeWidth: 2,
        overflow: 'visible'
      }}
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path d="m15.9998 28.6668c7.1667-4.8847 14.3334-10.8844 14.3334-18.1088 0-1.84951-.6993-3.69794-2.0988-5.10877-1.3996-1.4098-3.2332-2.11573-5.0679-2.11573-1.8336 0-3.6683.70593-5.0668 2.11573l-2.0999 2.11677-2.0988-2.11677c-1.3995-1.4098-3.2332-2.11573-5.06783-2.11573-1.83364 0-3.66831.70593-5.06683 2.11573-1.39955 1.41083-2.09984 3.25926-2.09984 5.10877 0 7.2244 7.16667 13.2241 14.3333 18.1088z" />
    </svg>
  );
}

export function GridDotsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="15" height="15" fill="currentColor" aria-hidden="true">
      <circle cx="2" cy="2" r="1.5" />
      <circle cx="8" cy="2" r="1.5" />
      <circle cx="14" cy="1.5" />
      <circle cx="2" cy="8" r="1.5" />
      <circle cx="8" cy="8" r="1.5" />
      <circle cx="14" cy="8" r="1.5" />
      <circle cx="2" cy="14" r="1.5" />
      <circle cx="8" cy="14" r="1.5" />
      <circle cx="14" cy="14" r="1.5" />
    </svg>
  );
}

export function StarIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="12" height="12" fill="currentColor" aria-hidden="true">
      <path d="M16 2l4 9 10 1-7.5 6.5L25 29l-9-5-9 5 2.5-10.5L2 12l10-1z" />
    </svg>
  );
}

export function BackArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 28L8 16 20 4" />
    </svg>
  );
}

export function CloseIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 6l20 20M26 6L6 26" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 26L10 16 20 6" />
    </svg>
  );
}

export function ChevronRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 6l10 10-10 10" />
    </svg>
  );
}

export function PoolIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="m15.59 1.91 1.02.8C22.17 7.04 25 11.46 25 15.98a8.99 8.99 0 0 1-.5 3.02H31v2h-2v9a1 1 0 0 1-.88 1H4a1 1 0 0 1-1-.88V21H1v-2h6.42c-.28-.9-.42-1.91-.42-3.01 0-2.25 1.1-4.82 3.27-7.75l.27-.35.55-.73 1.78 1.12L15.6 1.9zM27 21H5v8h22v-8zM16.4 5.1l-2.6 6.1-2.21-1.37-.17.24C9.87 12.3 9.07 14.2 9 15.77l-.01.21c0 1.1.17 2.04.48 2.85l.07.17h3a6.1 6.1 0 0 1-.05-.83c0-1.52.86-3.19 2.52-5.07l.24-.27.74-.81.74.8c1.82 2 2.76 3.76 2.76 5.35 0 .3-.02.57-.05.83h3.06l-.14-.07a6.7 6.7 0 0 0 .63-2.95c0-3.42-2.03-6.93-6.17-10.51l-.43-.36zm-.4 9.94-.08.1c-.9 1.14-1.36 2.11-1.41 2.88l-.01.15c0 .35.03.63.09.83h2.82c.06-.2.09-.48.09-.83 0-.79-.46-1.8-1.42-3.04l-.08-.1z" />
    </svg>
  );
}

export function SnowflakeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M20.33 3.08c1.5 2.24.96 5.55-1.38 9.9l-.12.2.18.18c.1.13.21.26.3.4l.23.38.14.02c.7.06 1.78-.11 2.87-.48.89-.3 1.78-.78 2.68-1.45l.66-.52a3 3 0 0 1 4.77 1.33l.12.44c.59 3.35.02 5.73-1.86 6.98-2.24 1.5-5.54.96-9.9-1.39a3 3 0 0 1-.27-.16l-.07.07-.39.3-.28.19V20c-.03.7.15 1.68.48 2.68.3.88.78 1.78 1.45 2.68l.26.33.26.33a3 3 0 0 1-.36 4.22C19 31 17.95 31 17 31h-.54l-1.39-.1c-1.24-.19-2.56-.65-3.36-1.84-1.5-2.25-.96-5.55 1.39-9.91.04-.09.1-.17.15-.25a4.12 4.12 0 0 1-.37-.4.82.82 0 0 0-.18-.23.5.5 0 0 0-.21-.11c-.7-.1-1.85.06-3.04.46-.88.3-1.78.78-2.68 1.45l-.66.52a3 3 0 0 1-4.77-1.33l-.12-.44c-.59-3.35-.02-5.73 1.86-6.98 2.24-1.5 5.55-.96 9.9 1.38l.1.05c.3-.3.55-.5.72-.61l.2-.13.03-.2c.06-.7-.11-1.78-.48-2.88a9.6 9.6 0 0 0-1.45-2.68l-.52-.66a3 3 0 0 1 1.33-4.77l.44-.12c3.35-.59 5.73-.02 6.98 1.86zm-5.31 16.8-.16.22c-2.04 3.77-2.5 6.45-1.49 7.85 1.13 1.55 4.63 1.55 5.44.77.38-.36.47-.89.2-1.31l-.37-.45a11.94 11.94 0 0 1-2.05-3.64 10.93 10.93 0 0 1-.59-3.03V20h-.14a4.01 4.01 0 0 1-.63-.07l-.21-.05zM4.09 13.52c-1.56 1.13-1.56 4.63-.78 5.44.36.38.9.46 1.32.19l.44-.36c1.2-.96 2.42-1.64 3.65-2.05 1.16-.4 2.33-.6 3.28-.6V16c0-.14 0-.28.02-.42l.08-.46-.16-.12c-3.78-2.03-6.46-2.5-7.85-1.48zm23.24-.36-.45.36c-1.2.96-2.41 1.64-3.64 2.05-1.15.38-2.3.6-3.24.6-.01.25-.05.5-.1.74l-.07.26.19.14c3.77 2.03 6.45 2.5 7.85 1.48 1.55-1.13 1.55-4.63.78-5.44-.36-.38-.9-.47-1.32-.19zM16 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.2 3.39c-.37.36-.46.89-.18 1.31l.36.45c.95 1.2 1.64 2.42 2.05 3.64.37 1.14.59 2.27.59 3.2l.54.05.3.05.2.05.1-.13c2.04-3.77 2.5-6.45 1.49-7.84-1.13-1.56-4.63-1.56-5.44-.78z" />
    </svg>
  );
}

export function KeyIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M24.33 1.67a2 2 0 0 1 2 1.85v24.81h3v2H2.67v-2h3V3.67a2 2 0 0 1 1.85-2h.15zm-4 2H7.67v24.66h12.66zm4 0h-2v24.66h2zm-7 11a1.33 1.33 0 1 1 0 2.66 1.33 1.33 0 0 1 0-2.66z" />
    </svg>
  );
}

export function BedIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M28 6H4a2 2 0 0 0-2 2v18h2v-4h24v4h2V8a2 2 0 0 0-2-2zm0 2v10H4V8h24zM7 11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm18 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
    </svg>
  );
}

export function CouchIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M28 10V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v3a5 5 0 0 0-4 4.9V24a2 2 0 0 0 2 2h2v2h2v-2h20v2h2v-2h2a2 2 0 0 0 2-2v-9.1A5 5 0 0 0 28 10zm-22-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3H6zm24 17H4v-9.1a3 3 0 0 1 3-2.9h18a3 3 0 0 1 3 2.9z" />
    </svg>
  );
}

export function KitchenIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M26 1a5 5 0 0 1 5 5c0 6.39-1.6 13.19-4 14.7V31h-2V20.7c-2.36-1.48-3.94-8.07-4-14.36v-.56A5 5 0 0 1 26 1zm-9 0v18.12c2.32.55 4 3 4 5.88 0 3.27-2.18 6-5 6s-5-2.73-5-6c0-2.87 1.68-5.33 4-5.88V1zM2 1h1c4.47 0 6.93 6.37 7 18.5V21H4v10H2zm14 20c-1.6 0-3 1.75-3 4s1.4 4 3 4 3-1.75 3-4-1.4-4-3-4zM4 3.24V19h4l-.02-.96-.03-.95C7.67 9.16 6.24 4.62 4.22 3.36L4.1 3.3zm19 2.58v.49c.05 4.32 1.03 9.13 2 11.39V3.17a3 3 0 0 0-2 2.65zm4-2.65V17.7c.99-2.31 2-7.3 2-11.7a3 3 0 0 0-2-2.83z" />
    </svg>
  );
}

export function WifiIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M16 20.33a3.67 3.67 0 1 1 0 7.34 3.67 3.67 0 0 1 0-7.34zm0 2a1.67 1.67 0 1 0 0 3.34 1.67 1.67 0 0 0 0-3.34zM16 15a9 9 0 0 1 8.04 4.96l-1.51 1.51a7 7 0 0 0-13.06 0l-1.51-1.51A9 9 0 0 1 16 15zm0-5.33c4.98 0 9.37 2.54 11.94 6.4l-1.45 1.44a12.33 12.33 0 0 0-20.98 0l-1.45-1.45A14.32 14.32 0 0 1 16 9.66zm0-5.34c6.45 0 12.18 3.1 15.76 7.9l-1.43 1.44a17.64 17.64 0 0 0-28.66 0L.24 12.24c3.58-4.8 9.3-7.9 15.76-7.9z" />
    </svg>
  );
}

export function WorkspaceIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M26 2a1 1 0 0 1 .92.61l.04.12 2 7a1 1 0 0 1-.85 1.26L28 11h-3v5h6v2h-2v13h-2v-2.54a3.98 3.98 0 0 1-1.73.53L25 29H7a3.98 3.98 0 0 1-2-.54V31H3V18H1v-2h5v-4a1 1 0 0 1 .88-1h.36L6.09 8.4l1.82-.8L9.43 11H12a1 1 0 0 1 1 .88V16h10v-5h-3a1 1 0 0 1-.99-1.16l.03-.11 2-7a1 1 0 0 1 .84-.72L22 2h4zm1 16H5v7a2 2 0 0 0 1.7 1.98l.15.01L7 27h18a2 2 0 0 0 2-1.85V18zm-16-5H8v3h3v-3zm14.24-9h-2.49l-1.43 5h5.35l-1.43-5z" />
    </svg>
  );
}

export function ParkingIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.7-5 .41 1.12A4.97 4.97 0 0 1 30 18v9a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2H8v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9c0-1.57.75-2.96 1.89-3.88L4.3 13H2v-2h3v.15L6.82 6.3A2 2 0 0 1 8.69 5h14.62c.83 0 1.58.52 1.87 1.3L27 11.15V11h3v2h-2.3zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v5h24zm-3-10h.56L23.3 7H8.69l-2.25 6H25zm-15 7h12v-2H10v2z" />
    </svg>
  );
}

export function HotTubIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M9.5 2a4.5 4.5 0 0 1 3.53 7.3c.6.21 1.17.54 1.66.98l.19.19L17.4 13H31v2h-2v14a2 2 0 0 1-1.85 2H5a2 2 0 0 1-2-1.85V15H1v-2h2.1a5 5 0 0 1 2.96-3.6A4.5 4.5 0 0 1 9.5 2zm7.08 13H5v14h22V15h-7.59l3.3 3.3-1.42 1.4zM9.5 4a2.5 2.5 0 0 0-1 4.8V11H8a3 3 0 0 0-2.83 2h9.41l-1.12-1.12a3 3 0 0 0-1.92-.87l-.2-.01h-.84V8.8a2.5 2.5 0 0 0-1-4.8zm15.49-3a6.96 6.96 0 0 1-1.8 4.07l-.45.46A8.97 8.97 0 0 0 20.35 11h-2a10.97 10.97 0 0 1 3.2-7.12A4.96 4.96 0 0 0 22.97 1zm2 0h2a10.96 10.96 0 0 1-3.2 7.12A4.97 4.97 0 0 0 24.38 11h-2a6.97 6.97 0 0 1 1.8-4.06l.44-.47A8.96 8.96 0 0 0 26.99 1z" />
    </svg>
  );
}

export function PetIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M13.7 13.93a4 4 0 0 1 5.28.6l.29.37 4.77 6.75a4 4 0 0 1 .6 3.34 4 4 0 0 1-4.5 2.91l-.4-.08-3.48-.93a1 1 0 0 0-.52 0l-3.47.93a4 4 0 0 1-2.94-.35l-.4-.25a4 4 0 0 1-1.2-5.2l.23-.37 4.77-6.75a4 4 0 0 1 .96-.97zm3.75 1.9a2 2 0 0 0-2.98.08l-.1.14-4.84 6.86a2 2 0 0 0 2.05 3.02l.17-.04 4-1.07a1 1 0 0 1 .5 0l3.97 1.06.15.04a2 2 0 0 0 2.13-2.97l-4.95-7.01zM27 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM5 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm22 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6-10a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm10 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM11 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
    </svg>
  );
}

export function CameraIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M23 3a2 2 0 0 1 2 1.85v1.67l5-2v11.96l-5-2V16a2 2 0 0 1-1.85 2H16.9a5 5 0 0 1-3.98 3.92A5 5 0 0 1 8.22 26H4v4H2V20h2v4h4a3 3 0 0 0 2.87-2.13A5 5 0 0 1 7.1 18H4a2 2 0 0 1-2-1.85V5a2 2 0 0 1 1.85-2H4zM12 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm11-9H4v11h3.1a5 5 0 0 1 9.8 0H23zm5 2.48-3 1.2v3.64l3 1.2zM7 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

export function NoCoIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M2.05 6.3 4 8.23V25a3 3 0 0 0 2.82 3h16.94l1.95 1.95c-.16.02-.33.04-.5.04L25 30H7a5 5 0 0 1-5-4.78V7c0-.24.02-.48.05-.7zm1.66-4 26 26-1.42 1.4-26-26 1.42-1.4zM25 2a5 5 0 0 1 5 4.78V25a5 5 0 0 1-.05.7L28 23.77V7a3 3 0 0 0-2.82-3H8.24L6.3 2.05c.16-.02.33-.04.5-.04L7 2h18zM11.1 17a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

export function NoSmokeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="m3.49 7.73 1.44 1.44A12.94 12.94 0 0 0 3 16a13 13 0 0 0 19.82 11.07l1.45 1.44A14.93 14.93 0 0 1 16 31 15 15 0 0 1 3.49 7.73zm.22-5.44 26 26-1.42 1.42-26-26 1.42-1.42zM16 1a15 15 0 0 1 12.52 23.27l-1.45-1.45A12.94 12.94 0 0 0 29 16 13 13 0 0 0 16 3a12.94 12.94 0 0 0-6.83 1.93L7.74 3.5A14.93 14.93 0 0 1 16 1zm-4.9 16a5 5 0 0 0 3.9 3.9v2.03A7 7 0 0 1 9.07 17h2.03zm5.9 4.24 1.35 1.36a6.95 6.95 0 0 1-1.35.33v-1.69zM21.24 17h1.69c-.07.47-.18.92-.34 1.35L21.24 17zM17 9.07A7 7 0 0 1 22.93 15H20.9a5 5 0 0 0-3.9-3.9V9.07zm-7.6 4.58L10.76 15H9.07c.07-.47.18-.92.33-1.35zM15 9.07v1.69L13.65 9.4A6.95 6.95 0 0 1 15 9.07zM23 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

export function GenericAmenityIcon({ name = '' }: { name?: string }) {
  const n = name.toLowerCase();
  if (n.includes('carbon monoxide')) return <NoCoIcon />;
  if (n.includes('smoke')) return <NoSmokeIcon />;
  if (n.includes('camera') || n.includes('security')) return <CameraIcon />;
  if (n.includes('pool')) return <PoolIcon />;
  if (n.includes('tub') || n.includes('jacuzzi')) return <HotTubIcon />;
  if (n.includes('pet')) return <PetIcon />;
  if (n.includes('air') || n.includes('cool') || n.includes('fan')) return <SnowflakeIcon />;
  if (n.includes('check-in') || n.includes('key')) return <KeyIcon />;
  if (n.includes('bed') || n.includes('linen') || n.includes('cot')) return <BedIcon />;
  if (n.includes('sofa') || n.includes('couch') || n.includes('lounge')) return <CouchIcon />;
  if (n.includes('kitchen') || n.includes('cook') || n.includes('fridge') || n.includes('microwave') || n.includes('toaster') || n.includes('kettle') || n.includes('blender') || n.includes('crockery') || n.includes('dishes') || n.includes('dining')) return <KitchenIcon />;
  if (n.includes('wifi') || n.includes('internet')) return <WifiIcon />;
  if (n.includes('workspace') || n.includes('desk')) return <WorkspaceIcon />;
  if (n.includes('parking')) return <ParkingIcon />;
  return (
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12zm-1-17h2v8h-2zm0 10h2v2h-2z" />
    </svg>
  );
}
