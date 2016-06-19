import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom'
import Pencil from './tools/Pencil'

export default class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = { tool: Pencil() };

    this.getCursorPosition.bind(this);
  }

  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.tool = Pencil();
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
