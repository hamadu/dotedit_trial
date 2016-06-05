import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom'
import Pencil from './tools/Pencil'

const DotCanvas = React.createClass({
  componentDidMount() {
    this.canvas = findDOMNode(this);
    this.ctx = this.canvas.getContext('2d');
    this.tool = Pencil();
  },
  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return [
      e.clientX - left,
      e.clientY - top
    ];
  },
  onMouseDown: function(e) {
    this.tool.onMouseDown(this.ctx, ...this.getCursorPosition(e));
  },
  onMouseMove: function(e) {
    this.tool.onMouseMove(this.ctx, ...this.getCursorPosition(e));
  },
  onMouseUp: function(e) {
    this.tool.onMouseUp(this.ctx, ...this.getCursorPosition(e));
  },
  render: function() {
    const style = {
      border: '1px solid #000',
      position: 'absolute',
      left: 100,
      top: 100
    }
    return (
      <canvas
        style={style}
        width="512"
        height="512"
        onMouseDown={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}>
      </canvas>
    );
  }
});

module.exports = DotCanvas;
