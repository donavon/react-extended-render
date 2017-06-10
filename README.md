# react-extended-render

Extends React's `Component` by passing `props`, `state`, and `context` to the `render` method of a class.

## Install
```bash
$ npm i --save react-extended-render
```

## Usage

Use it just like you would use React's own `Component`. All you have to do is `import` from a different file.
For example, if your code looks like this:
```js
import React, { Component } from 'react';
```
Then all you have to do is change it to this:
```js
import React from 'react';
import Component from 'react-extended-render';
```

Once you do, `props`, `state`, and `context` will be passed to your `render` method as follows:
```js
export default class Hello extends Component {
  render({ name }) {
    return <h1>Hello {name}!</h1>;
  }
}
```

And here's an example that uses `state` as passed to `render`.
```js
export default class FlipFlop extends Component {
  constructor() {
    super();
    this.state = { flip: false };
    setInterval(() => {
      this.setState({ flip: !this.state.flip });
    }, 1000)
  }
  render(_, { flip }) {
    return <div>{flip ? 'Flip' : 'Flop'}</div>;
  }
}
```

This allows your code to eloquently destructure `props` (or `state` or `context`) inline within the passed parameters.

## Future Proof?

This is all fine and good, but what if some day Facebook, in all of their infinite wisdom, decides to pass parameters to `render`?
Will your code break? Nope! We've future-proofed the whole thing by appending any parameters that might be passed in the future at the end.
So, if some day Facebook passes `foo` to `render`, you can get to it like this:
```js
render(props, state, context, foo) {
  ...
}
```

## Do it live!

You can see examples above running live and in action on CodeSandbox:

- [HelloWorld](https://codesandbox.io/s/z2JZZlWm)
- [FlipFlop](https://codesandbox.io/s/R63ROYjgw)

![Do It Live!](https://media.giphy.com/media/q7UpJegIZjsk0/giphy.gif)
