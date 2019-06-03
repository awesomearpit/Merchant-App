import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  deleteMerchant,
  setSelectedMerchant,
  setMerchantBids
} from "../actions/index";

class ListItemMerchant extends Component {
  onDelete = () => {
    this.props.deleteMerchant(this.props.merchant.id);
  };

  render() {
    return (
      <tr>
        <td className="id">{this.props.merchant.id}</td>
        <td>{this.props.merchant.firstName}</td>
        <td>{this.props.merchant.lastName}</td>
        <td className="avatar">{this.props.merchant.avatarUrl}</td>
        <td className="email">{this.props.merchant.emailId}</td>
        <td>{this.props.merchant.phone}</td>
        <td className="premium">
          {this.props.merchant.hasPremium == 0 ? "no" : "yes"}
        </td>
        <td>
          <button className="btn btn-danger" onClick={this.onDelete}>
            delete
          </button>
        </td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      deleteMerchant: deleteMerchant,
      setSelectedMerchant: setSelectedMerchant,
      setMerchantBids: setMerchantBids
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemMerchant);
