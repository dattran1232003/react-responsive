## react-responsive
A distinct way to make your React app responsive. **Fast, simple syntax, lightweight** and keep your code **easy-to-read** are the things what its aim for.

## Table of content
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
    1. [Basic Usage](#basic-use)
    2. [Advanced Usage](#advanced-use)
4. [Props](#props)
    1. [Wrapper](#wrapper)
    2. [Breakpoints](#breakpoints)
5. [Liencese](#liencese)

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
set up like this and you're good to go:
```jsx
import React from 'react'
import Responsive, { Mobile, Tablet, Laptop } from "@dattr/react-responsive";

export default function App() {
  return (
    <div className="one-device">
      <Responsive>
        <Mobile>
          <h3 className="mobile">Mobile Screen</h3>
        </Mobile>

        <Tablet only>
          <h2 className="tablet">Tablet Screen</h2>
        </Tablet>
        
        {/* Laptop screen and up */}
        <Laptop only andUp>
          <h1>Laptop Screen and up</h1>
        </Laptop>
      </Responsive>
    </div>
  );
}

```

If not use `only` props, it means show `html` from this **Screen** to **Zero width** (e.g: display h3 from Tablet screen to 0 screen width):
```jsx
<Tablet>
  <h3>Mobile Screen</h3>
</Tablet>
```

Display `html` just in range of devices (e.g: display h3 from Mobile to Laptop), use `andUpTo` props:
```jsx
<Mobile only andUpTo='laptop'>
  <h3>Mobile </h3>
</Mobile>
```

Or you can use `andUpTo` with number represent the **maximum** screen width of device (eg: display h3 from Laptop to 4K screen):
```jsx
{/* Max screen width of 4K is 8K - 1 */}
<Laptop only andUpTo={7680 - 1}>
  <h3>Laptop Screen and 4K screen</h3>
</Laptop>
```

## Props
### Wrapper
### Breakpoints

## License

MIT © [dattran1232003](https://github.com/dattran1232003)
