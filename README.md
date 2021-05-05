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
  
```javascript
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
```javascript
// some-component.jsx
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

Isn't that enough for you? Relax, just use `createCustom` function and you'll have any screen you want.
> The custom components which created by this function have same props as other Breakpoints import from this library.

Create multi Breakpoints:
```javascript
// some-component.jsx
import { createCustom } from '@dattr/react-responsive';

function Component(props) {
   const [FourK, EightK] = createCustom([
    { minWidth: 3840, maxWidth: 7680 - 1 },
    { minWidth: 7680, maxWidth: Infinity } // Infinity equal andUp prop by default
   ])
   
  return (
    <h3 className='large-screen-text'>
      <FourK only>This is text of h3 tag which display on 4K screen only</FourK>
      <EightK only>This is text of h3 tag which display 8K screen only and up</EightK>
    </h3>
  )
}

export default Component
```

Create only one Breakpoint:
```javascript
// some-component.jsx
import { createCustom } from '@dattr/react-responsive';

function Component(props) {
   const [FourK] = createCustom({ minWidth: 3840, maxWidth: 7680 - 1 })
   
  return (
    <h3 className='large-screen-text'>
      <FourK only>This is text of h3 tag which display on 4K screen only</FourK>
    </h3>
  )
}

export default Component
```

### Caution:

**Do not**:

⚠️ use `andUp` prop without `only` prop:
```javascript
<Tablet andUp>
  <h3>This will display on any screen</h3>
</Tablet>
```
**solution:**

✅  Use `andUp` together with `only`

✅  Unwrap it instead:
```javascript
 <h3>This will display on any screen</h3>
```

## Props
### Wrapper
`children (Any):`
Take the JSX elements, string, number,... and the Breakpoints (Mobile, Tablet, Laptop,...) that you import from this library.

### Breakpoints

## License

MIT © [dattran1232003](https://github.com/dattran1232003)

