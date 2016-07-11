export default () => {
  const name = () => {
    return 'rect';
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
      { to: 'virtual', kind: 'line', fx: fromX, fy: fromY, tx: fromX, ty: y },
      { to: 'virtual', kind: 'line', fx: fromX, fy: fromY, tx: x, ty: fromY },
      { to: 'virtual', kind: 'line', fx: x, fy: y, tx: fromX, ty: y },
      { to: 'virtual', kind: 'line', fx: x, fy: y, tx: x, ty: fromY }
    ];
  };

  const onMouseUp = (x, y) => {
    var pyon = [
      { kind: 'line', fx: fromX, fy: fromY, tx: fromX, ty: y },
      { kind: 'line', fx: fromX, fy: fromY, tx: x, ty: fromY },
      { kind: 'line', fx: x, fy: y, tx: fromX, ty: y },
      { kind: 'line', fx: x, fy: y, tx: x, ty: fromY }
    ];
    console.log(pyon);
    return pyon;
  };

  return {
    name,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
