import React, { useState } from "react";

function Button(props) {
  const [color] = useState(props.color);
  const [background] = useState(props.background);
  const [radius] = useState(props.radius);
  const [paddingRight] = useState(props.padding);
  const [paddingLeft] = useState(props.padding);
  const [paddingTop] = useState(props.padding);
  const [paddingBottom] = useState(props.padding);
  const [content] = useState(props.content);
  const [border] = useState(props.border);

  return (
    <div>
      <button
        style={{
          backgroundColor: background,
          paddingBottom: paddingBottom,
          paddingRight: paddingRight,
          paddingTop: paddingTop,
          paddingLeft: paddingLeft,
          borderRadius: radius,
          color: color,
          border: border
        }}
      >
        {content}
      </button>
    </div>
  );
}

export default Button;
