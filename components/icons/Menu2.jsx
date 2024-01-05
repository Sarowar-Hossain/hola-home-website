import React from "react";

const Menu = ({ ...props }) => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 5.5H14M0 9.5H14M0 1.5H14"
        stroke="#484C52"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Menu;
