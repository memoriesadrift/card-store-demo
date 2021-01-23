import React, { Component } from "react";

class UIKit extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== "undefined") {
      const uikit = require("uikit");
      const icons = require("../node_modules/uikit/dist/js/uikit-icons");
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default UIKit;
