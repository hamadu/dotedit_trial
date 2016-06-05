import React, {Component, PropTypes} from 'react';
import OriginCanvas from './components/OriginCanvas'

export default class Layer extends Component {
  drawLine = (fx, fy, tx, ty) => {
      // draw
      originCtx.lineWidth = 1;
      originCtx.strokeStyle = 'rgb(0, 0, 255)';
      originCtx.moveTo(fx, fy);
      originCtx.lineTo(tx, ty);
      originCtx.stroke();

      // copy
    };

  render() {
    return (
      <div>
        <OriginCanvas ref="origin" />
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
