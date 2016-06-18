import React, {Component, PropTypes} from 'react';

export default class DotCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.canvasContext.bind(this);
  }

  componentDidMount() {
    this.setState({ ctx: this.refs.canvas.getContext('2d') });
  }

  canvasContext() {
    return this.state.ctx;
  }

  render() {
    const style = {
      border: '1px solid #000',
      position: 'absolute',
      left: 100,
      top: 100
    }
    return (
      <canvas
        ref="canvas"
        style={style}
        width="512"
        height="512">
      </canvas>
    );
  }
};

module.exports = DotCanvas;
