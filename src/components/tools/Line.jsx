export default () => {
  const name = () => {
    return 'line';
  };

  let fromX, fromY;

  const onMouseDown = (x, y) => {
    fromX = x;
    fromY = y;
    return [
      { to: 'virtual', kind: 'clear' },
      { to: 'virtual', kind: 'dot', x: x, y: y }
    ];
  };

  const onMouseMove = (x, y) => {
    return [
      { to: 'virtual', kind: 'clear' },
      { to: 'virtual', kind: 'line', fx: fromX, fy: fromY, tx: x, ty: y }
    ];
  };

  const onMouseUp = (x, y) => {
    return [
      { to: 'real', kind: 'line', fx: fromX, fy: fromY, tx: x, ty: y }
    ];
  };

  return {
    name,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
