const React = require('react');
const ToolPalette = require('./components/ToolPalette');
const ColorPalette = require('./components/ColorPalette');
// const DotCanvas = require('./components/DotCanvas');
// import OriginCanvas from './components/OriginCanvas'
import Layer from './components/Layer';
import Drawer from './components/Drawer';


const Root = React.createClass({
  getInitialState: function () {
    return { name: "not clicked"  };
  },

  onMouseDown: function(x, y) {
    console.log("down", x, y);
  },

  onMouseMove: function(x, y) {
    console.log("move", x, y);
  },

  onMouseUp: function(x, y) {
    console.log("up", x, y);
  },

  render: function() {
    return (
      <div>
        <ToolPalette />
        <ColorPalette />
        <Layer />

        <Drawer
          onMouseDown={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onMouseUp={this.onMouseUp}
        />
      </div>
    );
  }
});

module.exports = Root;
