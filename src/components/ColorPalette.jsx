import React, {Component, PropTypes} from 'react';
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

export default class ColorPalette extends Component {
  render() {
    const colors = PALETTE.map(p => {
      const color = 'rgb(' + p.slice(0,3).join(',') + ')';
      let style = {  };
      if (color === this.props.color) {
        style['border'] = '2px solid #000';
      }

      return (
        <button style={style} onClick={this.props.onSwitchColor.bind(null, color)}>{p[3]}</button>
      )
    })
    return (
      <div>
        {colors}
      </div>
    );
  }
}

module.exports = ColorPalette;
