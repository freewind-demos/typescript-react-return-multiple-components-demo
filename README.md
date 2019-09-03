TypeScript React Return Multiple Components Demo
================================================

React可以返回一个component array，一次性返回多个组件。

对于这个功能我一开始比较激动，因为我以为可以拿到这多个组件，根据情况把它们放置在不同的位置（比如layout），
同时它们还可以共享state。然而可惜的是，并不能这样操作，只能把它们当作一个组件使用。

另外，在typescript中，因为typing的缺陷，会报以下错误：

```
TS2605: JSX element type 'Element[]' is not a constructor function for JSX elements.
```

可以修改typing，或者用`<></>`将component array包装成一个component.

```
npm install
npm run demo
```

It will open page on browser automatically.
