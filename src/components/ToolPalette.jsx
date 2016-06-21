import React, {Component, PropTypes} from 'react';
import Pencil from './tools/Pencil';

const TOOLS = [
  [Pencil(), '鉛筆'],
  [Pencil(), '線分'],
  [Pencil(), '四角形'],
  [Pencil(), '消しゴム'],
  [Pencil(), 'スポイト']
];

export default class ToolPalette extends Component {
  render() {
    const tools = TOOLS.map(t => {
      const style = {};
      if (t[0].name() === this.props.tool) {
        style['border'] = '2px solid #000';
      }
      return (
        <button style={style} onClick={this.props.onSwitchTool.bind(null, t[0])}>{t[1]}</button>
      )
    })
    return (
      <div>
        {tools}
      </div>
    );
  }
}

module.exports = ToolPalette;
