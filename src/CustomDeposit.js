import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

class CustomDeposit extends Component {
  render() {
    const cookies = new Cookies();
    const Component = this.props.component;
    const isAthenticated = cookies.get("auth_token");

    return isAthenticated ? (
      <Component
        token={cookies.get("auth_token")}
        showWallet={this.props.showWallet}
        setShowWallet={this.props.setShowWallet}
        toSend={this.props.toSend}
        setToSend={this.props.setToSend}
      />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

export default CustomDeposit;
