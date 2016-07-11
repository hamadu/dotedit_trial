import React, {Component, PropTypes} from 'react';
import Geometry from '../utils/geometry';
import OriginCanvas from './OriginCanvas';
import DotCanvas from './DotCanvas';

export default class Layer extends Component {
  constructor(props) {
    super(props);
    this.state = { z: 1 };

    this.drawDot.bind(this);
    this.drawLine.bind(this);
    this.dotToOrigin.bind(this);
    this.dotToDot.bind(this);
  }

  componentDidMount() {
    this.originCtx = this.refs.origin.canvasContext();
    this.originCanvas = this.refs.origin.canvas();

    this.dotCtx = this.refs.dot.canvasContext();
    this.dotCanvas = this.refs.dot.canvas();
  }

  drawDot(x, y, color) {
    this.dotToOrigin(x, y, color);
    this.dotToDot(x, y, color);
  }

  drawLine(fx, fy, tx, ty, color) {
    Geometry().lineToDots(fx, fy, tx, ty).forEach(dot => {
      this.dotToOrigin(dot[0], dot[1], color);
      this.dotToDot(dot[0], dot[1], color);
    });
  }

  clear() {
    this.dotCtx.clearRect(0, 0, 512, 512);
    this.originCtx.clearRect(0, 0, 32, 32);
  }

  dotToOrigin(x, y, color) {
    this.originCtx.fillStyle = color;
    this.originCtx.strokeStyle = color;
    this.originCtx.fillRect(x, y, 1, 1);
  }

  dotToDot(x, y, color) {
    this.dotCtx.fillStyle = color;
    this.dotCtx.strokeStyle = color;
    this.dotCtx.fillRect(x*16, y*16, 16, 16);
  }

  render() {
    return (
      <div>
        <OriginCanvas ref="origin" />
        <DotCanvas ref="dot" />
      </div>
    );
  }
}
