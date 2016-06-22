const React = require('react');
const ToolPalette = require('./components/ToolPalette');
const ColorPalette = require('./components/ColorPalette');
import Layer from './components/Layer';
import Drawer from './components/Drawer';
import Pencil from './components/tools/Pencil';
import Line from './components/tools/Line';

const Root = React.createClass({
  getInitialState: function () {
    return {
      name: 'not clicked',
      color: 'rgb(0,0,255)',
      tool: Pencil(),
      selection: {},
      last: {},
      drawing: false
    };
  },

  onSwitchColor: function(newColor) {
    this.setState({ color: newColor });
  },

  onSwitchTool: function(newTool) {
    this.setState({ tool: newTool });
  },

  onDraw: function(op) {
    const to = (op.to === 'virtual') ? this.refs.drawer : this.refs.layer;
    switch (op.kind) {
      case 'dot':
        to.drawDot(op.x, op.y, this.state.color);
        this.setState({ last: { x: op.x, y: op.y }});
        break;
      case 'line':
        to.drawLine(this.state.last.x, this.state.last.y, op.x, op.y, this.state.color);
        break;
    }
  },

  onMouseDown: function(x, y) {
    const inst = this.state.tool.onMouseDown(x, y);
    this.setState({ drawing: true });
    this.onDraw(inst);
  },

  onMouseMove: function(x, y) {
    if (this.state.drawing) {
      const inst = this.state.tool.onMouseMove(x, y);
      this.onDraw(inst);
    }
  },

  onMouseUp: function(x, y) {
    const inst = this.state.tool.onMouseUp(x, y);
    this.setState({ drawing: false });
    this.onDraw(inst);
  },

  render: function() {
    return (
      <div>
        <ToolPalette tool={this.state.tool.name()} onSwitchTool={this.onSwitchTool} />
        <ColorPalette color={this.state.color} onSwitchColor={this.onSwitchColor} />
        <Layer ref="layer" />

        <Drawer
          ref="drawer"
          onDraw={this.onDraw}
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
        />
      </div>
    );
  }
});

module.exports = Root;
