import React, { useState } from "react";

function Item({ name, category }) {
  const [add, setAdd] = useState(false)  
  
  function handleClick() {
    setAdd((add) => !add)
  }

  const liClass = add ? "in-cart" : " "
  
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {add ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
