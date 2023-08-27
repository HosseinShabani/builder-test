function ArrowFill({ color = "#fff", size = 16, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 4 6"
      fill="none"
    >
      <path
        d="M0.5 0.20125L0.5 5.79875C0.5 5.96664 0.647178 6.06039 0.747656 5.95641L3.44215 3.15766C3.51928 3.07755 3.51928 2.9233 3.44215 2.84234L0.747656 0.0435853C0.647178 -0.0603876 0.5 0.0333586 0.5 0.20125Z"
        fill={color}
      />
    </svg>
  );
}

export { ArrowFill };
