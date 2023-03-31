import React from "react";

function Buttons({
  bgc,
  borderRaduis,
  color,
  size,
  text,
  border,
  padding,
  id,
  clicks,
  margin,
}) {
  return (
    <button
      style={{
        backgroundColor: bgc,
        color: color,
        borderRadius: borderRaduis,
        fontSize: size,
        border: border,
        padding: padding,
        cursor: "pointer",
        margin: margin,
      }}
      id={id}
      onClick={clicks}
    >
      {text}
    </button>
  );
}

export default Buttons;
