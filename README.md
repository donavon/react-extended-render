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

This allows your code to eloquently destructure `props` inline within the passed parameters.

## Future Proof?

This is all find and good, but what if some day Facebook, in all of their infinite wisdom decides to pass parameters to `render`?
Will your code break? Nope! We've future-proofed the whole thing by appending any parameters that might be passed in the future at the end.
So if some day Facebook passes `foo` to `render`, you can get to it like this:
```js
render(props, state, context, foo) {
  ...
}
```

## Do it live!

You can see it live and in action on [CodeSandbox](https://codesandbox.io/s/z2JZZlWm).

![Do It Live!](https://media.giphy.com/media/q7UpJegIZjsk0/giphy.gif)
