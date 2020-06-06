import React from 'react';

function OrderElement(props) {
  const title = Object.keys(props.productData);
  return title ? (
    <tr>
      <td>{title}</td>
      <td>{props.productData[title].price}</td>
    </tr>
  ) : null;
}

export default OrderElement;
