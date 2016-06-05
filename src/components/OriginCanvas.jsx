import React, {Component, PropTypes} from 'react';

export default class OriginCanvas extends Component {
  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext('2d');
  }

  context() {
    return this.ctx;
  }

  render() {
    const style = {
      border: '2px solid #000',
      position: 'absolute',
      left: 700,
      top: 100
    };
    return (
      <canvas
        style={style}
        width="64"
        height="64">
      </canvas>
    );
  }
}
