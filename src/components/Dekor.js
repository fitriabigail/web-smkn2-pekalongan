
export function Bintang({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <polygon
        fill="currentColor"
        points="50,0 61,25 85,15 75,39 100,50 75,61 85,85 61,75 50,100 39,75 15,85 25,61 0,50 25,39 15,15 39,25"
      />
    </svg>
  );
}

export function Lingkaran({ className = "", wajah = false }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <circle cx="50" cy="50" r="50" fill="currentColor" />
      {wajah && (
        <>
          <circle cx="35" cy="45" r="5" fill="#0b1f5c" />
          <circle cx="65" cy="45" r="5" fill="#0b1f5c" />
        </>
      )}
    </svg>
  );
}

export function Segitiga({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={`pointer-events-none ${className}`}>
      <polygon
        points="50,10 92,88 8,88"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}