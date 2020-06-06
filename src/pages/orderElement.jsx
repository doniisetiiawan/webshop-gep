import React, { Component } from 'react';

class OrderElement extends Component {
  render() {
    const title = Object.keys(this.props.productData);
    return title ? (
      <tr>
        <td>{title}</td>
        <td>{this.props.productData[title].price}</td>
      </tr>
    ) : null;
  }
}

export default OrderElement;
