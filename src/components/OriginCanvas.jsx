import React, {Component, PropTypes} from 'react';

export default class OriginCanvas extends Component {
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
      border: '2px solid #000',
      position: 'absolute',
      left: 700,
      top: 100
    };
    return (
      <canvas ref="canvas"
        style={style}
        width="64"
        height="64">
      </canvas>
    );
  }
}
