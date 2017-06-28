# react-extended-render

TL;DR

* Extends React's `Component` by passing `props`, `state`, and `context` to the `render` method of a class.
* Adds a `registerRender` method, allowing you to de-clutter your `render` method from so many `if` statements.
* Provides a handy `bind` method to bind methods to `this`.

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

## Additional props

Once you do, `props`, `state`, and `context` will be passed to your `render` method as follows:
```js
render(props, state, context) {
  ...
}
```
Meaning that you can conveniently destructure like this:
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

### Future Proof?

This is all fine and good, but what if some day Facebook, in all of their infinite wisdom, decides to pass parameters to `render`?
Will your code break? Nope! We've future-proofed the whole thing by appending any parameters that might be passed in the future at the end.
So, if some day Facebook passes `foo` to `render`, you can get to it like this:
```js
render(props, state, context, foo) {
  ...
}
```

## `registerRender`

You can use the utility method `registerRender` to register a render method.

```js
this.registerRender(conditionCallback, methodKey)
```
Where:

* `conditionCallback` is a function that will be called with `props`, `state`, and `context`.
If it returns a truthy value, then the method specified in `methodKey` will be called instead of the default `render`.
* `methodKey`

### Example

You have a props `loading` and `error`.
In your `render` method, you have to manually check for `loading` and `error`
to see if you should render a loading indicator, something like this:

```js
render() {
  const { loading, error } = this.props;

  return (
    if (loading) {
      return <div className={className}>Loading...</div>;
    } else if (error) {
      return <div className={className}>Error</div>;
    }
    return (
      <div className={className}>
        Yay! My component successfully loaded!
      </div>
    );
  ;)  
}
```
This is a typical pattern. Lots of \`if\` statements inside of your \`render\` method.
You start to forget what you _really_ wanted to render in the first place.

Let's say you could separate your concerns and render only what you needed.
Your code would look something like this:

```js
renderLoading({ className }) {
  return <div className={className}>Loading...</div>;
}

renderError({ className }) {
  return <div className={className}>Error</div>;
}

render({ className }) {
  return (
    <div className={className}>
      Yay! My component successfully loaded!
    </div>
  );
}
```

And you setup the whole thing like this:

```js
import ExtendedRenderComponent from 'react-extended-render';

class MyComponent extends ExtendedRenderComponent {
  constructor() {
    super();
    this.registerRender(props => props.loading, 'renderLoading');
    this.registerRender(props => props.error, 'renderError');
  }
```

## `bind`


Normally you would have to bind your handlers and methods in the `constructor` like this:
```js
this.foo = this.foo.bind(this);
this.bar = this.bar.bind(this);
```

`bind` simplifies this by allowing you to bind multiple methods
in one shot, like this:

```js
this.bind('foo', `bar`);
```

## Do it live!

You can see examples above running live and in action on CodeSandbox:

- [Demo (registerRender and bind)](https://codesandbox.io/s/Qj27x91L)
- [HelloWorld](https://codesandbox.io/s/z2JZZlWm)
- [FlipFlop](https://codesandbox.io/s/R63ROYjgw)

![Do It Live!](https://media.giphy.com/media/q7UpJegIZjsk0/giphy.gif)
