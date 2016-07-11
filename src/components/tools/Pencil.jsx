export default () => {
  const name = () => {
    return 'pencil';
  };

  let fromX, fromY;

  const onMouseDown = (x, y) => {
    fromX = x;
    fromY = y;
    return [
      { to: 'real', kind: 'dot', x: x, y: y }
    ];
  };

  const onMouseMove = (x, y) => {
    const prevX = fromX;
    const prevY = fromY;
    fromX = x;
    fromY = y;
    return [
      { to: 'real', kind: 'line', fx: prevX, fy: prevY, tx: x, ty: y }
    ];
  };

  const onMouseUp = (x, y) => {
    return [];
  };

  return {
    name,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
