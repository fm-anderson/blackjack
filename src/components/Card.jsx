import React from "react";

function Card({ image }) {
  return (
    <li className="shadow-sm">
      <img src={image} width={100} />
    </li>
  );
}

export default Card;
