import React, {Component, PropTypes} from 'react';
import { findDOMNode } from 'react-dom'

export default class Grid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const ctx = findDOMNode(this).getContext('2d');
    ctx.strokeStyle = 'rgb(192,192,192)';
    ctx.lineWidth = 1;
    for (var i = 16 ; i < 512 ; i += 16) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.stroke();
    }
  }

  render() {
    const style = {
      position: 'absolute',
      left: 100,
      top: 100,
      z: 998
    }
    return (
      <canvas style={style} width="512" height="512"></canvas>
    )
  }
}

module.exports = Grid;
