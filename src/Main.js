import React, { Component } from "react";
import AddMerchant from "./containers/add-merchant";
import ListMerchant from "./containers/list-merchant";
import "./App.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { merchantsState: { selectedMerchant: "" } };
  }
  render() {
    return (
      <div className="container">
        <AddMerchant />
        <div className="row break">
          <ListMerchant />
        </div>
      </div>
    );
  }
}

export default Main;
