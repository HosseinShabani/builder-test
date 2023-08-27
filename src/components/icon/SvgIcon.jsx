function SvgIcon({ color = "#fff", size = 16, className }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clipPath="url(#clip0_323_3101)">
        <g clipPath="url(#clip1_323_3101)">
          <path
            d="M8.00065 14.6663C11.6825 14.6663 14.6673 11.6816 14.6673 7.99967C14.6673 4.31778 11.6825 1.33301 8.00065 1.33301C4.31875 1.33301 1.33398 4.31778 1.33398 7.99967C1.33398 11.6816 4.31875 14.6663 8.00065 14.6663Z"
            stroke={color}
            strokeWidth="1.33333"
          />
        </g>
      </g>
      <defs>
        <g fill={color}>
          <clipPath id="clip0_323_3101">
            <rect width="16" height="16" />
          </clipPath>
          <clipPath id="clip1_323_3101">
            <rect width="16" height="16" />
          </clipPath>
        </g>
      </defs>
    </svg>
  );
}

export { SvgIcon };
