## react-responsive
A distinct way to make your React app responsive. **Fast, simple syntax, lightweight** and keep your code **easy-to-read** are the things what its aim for.

## Table of content
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
   1. [Basic Use](#basic-use)
   2. [Advanced Use](#advanced-use)
   3. [Caution](#caution)
4. [Props](#props)
   1. [Wrapper](#wrapper)
   2. [Breakpoints](#breakpoints)
5. [License](#license)

## Features
-
-

## Installation
Using NPM:
```bash
npm i @dattr/react-responsive
```
Using Yarn:
```bash
yarn add @dattr/react-responsive
```
## Usage
[![Open In CodeSandbox](https://img.shields.io/badge/Open%20In-codeSandbox-blue)](https://codesandbox.io/s/react-responsive-test-bk2ho)

### Basic Use:
Wrap all Element in `App.js` file (like provide a Context) and you're good to go:
  
```jsx
// App.js 
import React from 'react';
import Responsive from "@dattr/react-responsive";

export default function App(props) {
  return (
    <Responsive>
      ...
    </Responsive>
  );
}

```
in Component file:
```jsx
// some-other-component.js
import { Mobile, Tablet } from '@dattr/react-responsive';

export default function Component (props) {
  return (
    <div className='some-classname'>
      <Mobile>
        <h3>This is display on Mobile screen only and not display on larger screen</h3>
      </Mobile>
      
      <Tablet>
        <h3>This is display on Tablet and smaller screen. But not display on larger screen.</h3>
      </Tablet>
      
      <Tablet only>
        <h3>This is display on Tablet screen only and not display on larger screen or smaller screen</h3>
      </Tablet>
      
      <Tablet only andUp>
        <h3>This is display on Tablet and larger screen (opposite to <Tablet> with no props), but not display on smaller screen like Mobile</h3>
      </Tablet>
    </div>
  )
}
```


### Advanced Use:


### Caution:

⚠️ **Do not** use `andUp` prop without `only` prop:
```jsx
<Tablet andUp>
  <h3>This will display on any screen</h3>
</Tablet>
```
**solution:**

✅  Use `andUp` together with `only`

✅  Unwrap it instead:
```jsx
 <h3>This will display on any screen</h3>
```

## Props
### Wrapper
`children (Any):`
Take the JSX elements, string, number,... and the Breakpoints (Mobile, Tablet, Laptop,...) that you import from this library.

### Breakpoints

## License

MIT © [dattran1232003](https://github.com/dattran1232003)

