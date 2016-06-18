import React, {Component, PropTypes} from 'react';
import OriginCanvas from './OriginCanvas';
import DotCanvas from './DotCanvas';

export default class Layer extends Component {
  constructor(props) {
    super(props)
    this.state = { z: 1 }

    this.drawLine.bind()
  }

  componentDidMount() {
    this.originCtx = this.refs.origin.canvasContext();
    this.dotCtx = this.refs.dot.canvasContext();

    console.log(this.originCtx, this.dotCtx);
  }

  drawLine(fx, fy, tx, ty) {
    //

    // draw
    // originCtx.lineWidth = 1;
    // originCtx.strokeStyle = 'rgb(0, 0, 255)';
    // originCtx.moveTo(fx, fy);
    // originCtx.lineTo(tx, ty);
    // originCtx.stroke();

    // copy

  };

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
