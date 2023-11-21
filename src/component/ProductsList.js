import React, { Component } from "react";
import Product from "./Product";

export default class ProductsList extends Component {
  render() {
    return (
      <React.Fragment>
        <table align="center">
          <thead>
            <tr>
              <td>ID</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.props.product.map(data => (
              <Product key={data.id} rowData={data} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
