import React from "react";

function OrderedNumbers({ numbers }) {
  return (
    <div>
      <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderedNumbers;
