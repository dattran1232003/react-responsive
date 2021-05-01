## react-responsive
A distinct way to make your React app responsive. **Fast, simple syntax, lightweight** and make your code **easy-to-read** are the things what its aim for.

## Install
Using NPM:
```bash
npm i @dattr/react-responsive
```
Using Yarn:
```bash
yarn add @dattr/react-responsive
```
## Usage
[![NPM](https://img.shields.io/badge/Open%20In-codeSandbox-blue)](https://codesandbox.io/s/react-responsive-test-bk2ho)

```jsx
import React from 'react'
import Responsive, {
  Mobile,
  Tablet,
  Laptop
} from "@dattr/react-responsive-component";

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

        <Laptop only andUp>
          {/* Laptop screen and up*/}
          <h1 className="laptop">Laptop Screen and up</h1>
        </Laptop>
      </Responsive>
    </div>
  );
}

```

## License

MIT © [dattran1232003](https://github.com/dattran1232003)
