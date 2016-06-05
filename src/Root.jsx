const React = require('react');
const ToolPalette = require('./components/ToolPalette');
const ColorPalette = require('./components/ColorPalette');
const DotCanvas = require('./components/DotCanvas');
import OriginCanvas from './components/OriginCanvas'

const Root = React.createClass({
  getInitialState: function () {
    return { name: "not clicked"  };
  },
  render: function() {
    return (
      <div>
        <ToolPalette />
        <ColorPalette />
        <DotCanvas />
        <OriginCanvas />
      </div>
    );
  }
});

module.exports = Root;
