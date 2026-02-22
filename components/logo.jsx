export default function ZubairDevLogo({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 400"
      className={className}
      fill="none"
    >
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradientText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Main Text: ZubairDev */}
      <text
        x="50%"
        y="45%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="700"
        fontSize="120"
        fill="url(#gradientText)"
      >
        ZubairDev
      </text>

      {/* Sub Text: CODER */}
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontWeight="500"
        fontSize="60"
        fill="#3AB7FF"
        letterSpacing="8"
      >
        CODER
      </text>
    </svg>
  );
}
