const React = require('react');
const ColorPalette = React.createClass({
  render: function() {
    return (
      <div>
        <button>赤</button>
        <button>橙</button>
        <button>黄</button>
        <button>緑</button>
        <button>青</button>
        <button>紫</button>
        <button>黒</button>
      </div>
    );
  }
});

module.exports = ColorPalette;
