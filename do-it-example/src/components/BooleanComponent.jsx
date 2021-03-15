import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BooleanComponent extends Component {
  render() {
    const message = this.props.bored ? '놀러갈까?' : '하던 일부터...';
    return <div className="message-container">{message}</div>;
  }
}

BooleanComponent.propTypes = {
  message: PropTypes.bool,
};

export default BooleanComponent;
