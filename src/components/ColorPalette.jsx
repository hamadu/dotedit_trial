const React = require('react');
const PALETTE = [
  [255, 0,   0,   '赤'],
  [255, 127, 0,   '橙'],
  [255, 255, 0,   '黄'],
  [0,   255, 0,   '緑'],
  [0  , 0,   255, '青'],
  [255, 0,   255, '紫'],
  [0,   0,   0,   '黒'],
  [255, 255, 255, '白']
];

const ColorPalette = React.createClass({
  render: function() {
    const colors = PALETTE.map(p => {
      const color = 'rgb(' + p.slice(0,3).join(',') + ')';
      return (
        <button onClick={this.props.onSwitchColor.bind(null, color)}>{p[3]}</button>
      )
    })
    return (
      <div>
        {colors}
      </div>
    );
  }
});

module.exports = ColorPalette;
