export default () => {
  const name = () => {
    return 'pencil';
  };

  const onMouseDown = (x, y) => {
    return [
      { to: 'real', kind: 'dot', x: x, y: y },
      { kind: 'move', x: x, y: y }
    ];
  };

  const onMouseMove = (x, y) => {
    return [
      { to: 'real', kind: 'line', x: x, y: y },
      { kind: 'move', x: x, y: y }
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
