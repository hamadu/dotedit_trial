const React = require('react');
const ToolPalette = React.createClass({
  render: function() {
    return (
      <div>
        <button>鉛筆</button>
        <button>線分</button>
        <button>四角形</button>
        <button>消しゴム</button>
        <button>スポイト</button>
      </div>
    );
  }
});

module.exports = ToolPalette;
