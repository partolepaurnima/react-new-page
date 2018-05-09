import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.paurnima.heading}</h2>
        <p>{this.props.paurnima.paragraph}</p>
      </div>
    );
  }
}

export default Hello;
