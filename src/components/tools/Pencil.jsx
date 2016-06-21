export default () => {
  let drawingInfo = null;

  const name = () => {
    return 'pencil';
  };

  const onMouseDown = (x, y) => {
    return { to: 'real', kind: 'dot', x: x, y: y };
  };

  const onMouseMove = (x, y) => {
    return { to: 'real', kind: 'line', x: x, y: y };
  };

  const onMouseUp = (ctx, x, y) => {
    if (!drawingInfo) {
      return;
    }
    drawingInfo = null;
  };

  return {
    name,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
