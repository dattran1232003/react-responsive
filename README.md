## react-responsive
A distinct way to make your React app responsive. **Fast, simple syntax, lightweight** and keep your code **easy-to-read** are the things what its aim for.

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
[![Open In CodeSandbox](https://img.shields.io/badge/Open%20In-codeSandbox-blue)](https://codesandbox.io/s/react-responsive-test-bk2ho)

### Basic Use:
Component just display on single device:
```jsx
import React from 'react'
import Responsive, {
  Mobile,
  Tablet,
  Laptop
} from "@dattr/react-responsive";

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

If you want to display html just in range of devices (e.g: Mobile to Laptop), use `andUpTo` props:
```jsx
<Responsive>
  <Mobile andUpTo='laptop'>
    <h3>Mobile Screen</h3>
  </Mobile>
</Responsive>
  );
}
```
Or you can


## License

MIT © [dattran1232003](https://github.com/dattran1232003)
