export default () => {
  let drawingInfo = null;

  const onMouseDown = (x, y) => {
    return { to: 'real', kind: 'dot', x: x, y: y };
  };

  const onMouseMove = (x, y) => {
    return { to: 'real', kind: 'line', x: x, y: y };
    //
    // console.log(drawingInfo);
    // if (!drawingInfo) {
    //   return;
    // }
    // ctx.lineWidth = 1;
    // ctx.strokeStyle = 'rgb(0, 0, 255)';
    // ctx.moveTo(drawingInfo.x, drawingInfo.y);
    // ctx.lineTo(x, y);
    // ctx.stroke();
    // drawingInfo.x = x;
    // drawingInfo.y = y;
  };

  const onMouseUp = (ctx, x, y) => {
    if (!drawingInfo) {
      return;
    }
    drawingInfo = null;
  };

  return {
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
