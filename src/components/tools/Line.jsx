export default () => {
  const name = () => {
    return 'line';
  };

  const onMouseDown = (x, y) => {
    return [
      { to: 'virtual', kind: 'dot', x: x, y: y },
      { kind: 'move', x: x, y: y }
    ];
  };

  const onMouseMove = (x, y) => {
    return [
      { to: 'virtual', kind: 'line', x: x, y: y }
    ];
  };

  const onMouseUp = (x, y) => {
    return [
      { to: 'real', kind: 'line', x: x, y: y }
    ];
  };

  return {
    name,
    onMouseDown,
    onMouseMove,
    onMouseUp
  };
}
