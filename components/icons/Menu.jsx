const Menu = ({ ...props }) => {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M0.875 9H27.125M0.875 16.5H27.125M0.875 1.5H27.125"
        stroke="#222222"
        strokeWidth="1.5"
      />
    </svg>
  )
}

export default Menu
