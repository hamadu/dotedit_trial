export default () => {
  let drawingInfo = null;

  const onMouseDown = (ctx, x, y) => {
    drawingInfo = {
      x: x,
      y: y
    };
  };
  const onMouseMove = (ctx, x, y) => {
    console.log(drawingInfo);
    if (!drawingInfo) {
      return;
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgb(0, 0, 255)';
    ctx.moveTo(drawingInfo.x, drawingInfo.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    drawingInfo.x = x;
    drawingInfo.y = y;
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
