function TextIcon({ color = "#fff", size = 16, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g fill={color}>
        <path d="M11.5 13.5V7.5H9V6.5H15V7.5H12.5V13.5H11.5Z" />
        <path d="M5.5 13.5V4H1V3H11V4H6.5V13.5H5.5Z" />
      </g>
    </svg>
  );
}

export { TextIcon };
