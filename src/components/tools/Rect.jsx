export default () => {
  const name = () => {
    return 'rect';
  };

  let fromX, fromY;

  const onMouseDown = (x, y) => {
    fromX = x;
    fromY = y;
    return [
      { to: 'virtual', kind: 'dot', x: x, y: y },
      { kind: 'move', x: x, y: y }
    ];
  };

  const onMouseMove = (x, y) => {
    console.log(fromX, fromY);
    return [
      { to: 'virtual', kind: 'move', x: fromX, y: fromY },
      { to: 'virtual', kind: 'line', x: fromX, y: y },

      { to: 'virtual', kind: 'move', x: fromX, y: fromY },
      { to: 'virtual', kind: 'line', x: x, y: fromY },

      { to: 'virtual', kind: 'move', x: x, y: y },
      { to: 'virtual', kind: 'line', x: fromX, y: y },

      { to: 'virtual', kind: 'move', x: x, y: y },
      { to: 'virtual', kind: 'line', x: x, y: fromY }
    ];
  };

  const onMouseUp = (x, y) => {
    var pyon = [
      { kind: 'move', x: fromX, y: fromY },
      { kind: 'line', x: fromX, y: y },

      { kind: 'move', x: fromX, y: fromY },
      { kind: 'line', x: x, y: fromY },

      { kind: 'move', x: x, y: y },
      { kind: 'line', x: fromX, y: y },

      { kind: 'move', x: x, y: y },
      { kind: 'line', x: x, y: fromY }
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
