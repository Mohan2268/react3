import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { rowData } = this.props;
    return (
      <React.Fragment>
        {
          <tr>
            <td>{rowData.id}</td>
            <td>{rowData.productName}</td>
            <td>{rowData.quantity}</td>
            <td>{rowData.price}</td>
          </tr>
        }
      </React.Fragment>
    );
  }
}
