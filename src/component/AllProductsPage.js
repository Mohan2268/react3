import React, { Component } from "react";
import ProductsList from "./ProductsList";
// import data from '../db.json';
import axios from "axios";

export default class AllProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Products List",
      productList: []
    };
  }

  componentDidMount() {
    axios
      .get("db.json")
      .then(response => {
        this.setState({
          productList: response.data
        });
      })
      .catch(error => {
        console.log("err", error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.heading}</h1>
        <ProductsList product={this.state.productList} />
      </React.Fragment>
    );
  }
}
