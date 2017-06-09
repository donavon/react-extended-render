import { Component } from 'react';

export default class ReactComponent extends Component {
  constructor(props, context) {
    super(props, context);
    const render = this.render.bind(this);
    this.render = (...futureArgs) => render(props, this.state, context, ...futureArgs);
  }
}
