import React, { useState } from "react";

function Price(props) {
  const [getId, setId] = useState(false);

  function fillBackground() {
    setId((prevId) => !prevId);
  }

  return (
    <>
      <small className="price-one">
        <s>{props.name}</s>
      </small>
      <div className="price">
        {getId ? <h5>{props.name2}</h5> : <h5>{props.name2}</h5>}
        <a href="#" id={getId ? "cart" : "cart2"} onClick={fillBackground}>
          <span className="material-symbols-outlined">shopping_cart</span>
        </a>
      </div>
    </>
  );
}

export default Price;