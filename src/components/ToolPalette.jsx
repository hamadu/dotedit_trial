import React, {Component, PropTypes} from 'react';
import Pencil from './tools/Pencil';
import Line from './tools/Line';
import Rect from './tools/Rect';

const TOOLS = [
  [Pencil(), '鉛筆'],
  [Line(),   '線分'],
  [Rect(),   '長方形']
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

ToolPalette.propTypes = {
  tool: React.PropTypes.string,
  onSwitchTool: React.PropTypes.func
}

module.exports = ToolPalette;
