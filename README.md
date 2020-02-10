# react-raw-object

React component to render a raw javascript object as a collapsable tree.

## Installation

```bash
$ npm i react-raw-object
```

This module has a peer dependency on `react` and `react-dom`, versions at least 16.8.0.

## Use

To use this package, just import the `RawObject` component from the module, and give it the value to show in the `object` property:

```jsx
import React from "react";
import {RawObject} from "react-raw-object";

const TestComponent = props => {
  const something = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".match("Q");
  return <RawObject object={something}>;
};
```

## Properties

The RawObject component also accepts these properties:

```ts
className?: string
```

A classname for the main wrapper element.

```ts
depthExpanded?: number
```

The number of levels to show by default.  
Default value: `1`.

```ts
object: any
```

The object to show.

```ts
tagName?: "div" | "span"
```

The HTML tag name to use on the root parent element.  
This is provided for flexibility, but it should work on almost all use cases with a `"div"`.  
Default value: `"div"`.

## License

Licensed under the MIT License, Copyright © 2020 Francisco Abarzúa.

See [LICENSE](./LICENSE) for more information.
