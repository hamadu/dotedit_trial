import React, {Component, PropTypes} from 'react';
import Geometry from '../utils/geometry';
import { findDOMNode } from 'react-dom'

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.getCursorPosition.bind(this);

    this.drawDot.bind(this);
    this.drawLine.bind(this);
    this.clear.bind(this);
    this.dot.bind(this);
  }

  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext('2d');
  }

  drawDot(x, y, color) {
    this.dot(x, y, color);
  }

  drawLine(fx, fy, tx, ty, color) {
    Geometry().lineToDots(fx, fy, tx, ty).forEach(dot => {
      this.dot(dot[0], dot[1], color);
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, 512, 512);
  }

  dot(x, y, color) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
    this.ctx.fillRect(x*16, y*16, 16, 16);
  }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return [
      Math.floor((e.clientX - left) / 16),
      Math.floor((e.clientY - top) / 16)
    ];
  }

  onMouseDown(e) {
    this.props.onMouseDown(...this.getCursorPosition(e));
  }

  onMouseMove(e) {
    this.props.onMouseMove(...this.getCursorPosition(e));
  }

  onMouseUp(e) {
    this.props.onMouseUp(...this.getCursorPosition(e));
  }

  render() {
    const style = {
      position: 'absolute',
      left: 100,
      top: 100,
      z: 999
    }
    return (
      <canvas
        style={style}
        width="512"
        height="512"
        onMouseDown={this.onMouseDown.bind(this)}
        onMouseMove={this.onMouseMove.bind(this)}
        onMouseUp={this.onMouseUp.bind(this)}>
      </canvas>
    )
  }
}

module.exports = Drawer;
