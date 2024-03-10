import React from "react";

function NextIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="6" r="4" fill="#1C274C"></circle>
      <path
        fill="#1C274C"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5z"
        opacity="0.5"
      ></path>
    </svg>
  );
}

export default NextIcon;