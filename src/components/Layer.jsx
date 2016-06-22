import React, {Component, PropTypes} from 'react';
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

  lineToDots(fx, fy, tx, ty) {
    const dots = [];
    if (fx == tx) {
      while (fy != ty) {
        dots.push([Math.floor(fx), Math.floor(fy)]);
        fy += (ty - fy >= 1) ? 1 : -1;
      }
    } else {
      const diff = Math.abs((ty - fy) / (tx - fx));
      while (fx != tx) {
        const tty = fy + diff * ((ty >= fy) ? 1 : -1);
        if (diff >= 0) {
          while (fy <= tty) {
            dots.push([Math.floor(fx), Math.floor(fy)]);
            fy += 1;
          }
        } else {
          while (fy >= tty) {
            dots.push([Math.floor(fx), Math.floor(fy)]);
            fy -= 1;
          }
        }
        fy = tty;
        fx += (tx - fx >= 1) ? 1 : -1;
      }
    }
    return dots;
  }

  drawDot(x, y, color) {
    this.dotToOrigin(x, y, color);
    this.dotToDot(x, y, color);
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

  drawLine(fx, fy, tx, ty, color) {
    this.lineToDots(fx, fy, tx, ty).forEach(dot => {
      this.dotToOrigin(dot[0], dot[1], color);
      this.dotToDot(dot[0], dot[1], color);
    });
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


// export default () => {
//   let originCtx = null;
//   let displayCtx = null;
//
//
//
//   const drawLine = (fx, fy, tx, ty) => {
//     // draw
//     originCtx.lineWidth = 1;
//     originCtx.strokeStyle = 'rgb(0, 0, 255)';
//     originCtx.moveTo(fx, fy);
//     originCtx.lineTo(tx, ty);
//     originCtx.stroke();
//
//     // copy
//
//   };
//
//   const
//
//
//   return {
//     drawLine,
//     onMouseMove,
//     onMouseUp
//   };
// }
