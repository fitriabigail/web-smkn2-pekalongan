export default function Wave({ dari = "#0b1f5c", ke = "#fff8e7" }) {
  return (
    <div style={{ backgroundColor: dari }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
      >
        <path
          fill={ke}
          d="M0,40 C120,0 240,0 360,40 C480,80 600,80 720,40 C840,0 960,0 1080,40 C1200,80 1320,80 1440,40 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}