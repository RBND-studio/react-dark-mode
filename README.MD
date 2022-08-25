# @rbnd/react-dark-mode

Inspired by [use-dark-mode](https://github.com/donavon/use-dark-mode). And after being frustrated by it's shortcomings, `@rbnd/react-dark-mode` was created.

[![npm version](https://badge.fury.io/js/@rbnd%2Freact-dark-mode.svg)](https://badge.fury.io/js/@rbnd%2Freact-dark-mode)

## How it works

This package will take care of switching between light, dark and system preference. It will also get rid of the annoying flash between dark-light mode you get when opening a webpage.

## Example

TODO: Add example app and codebase.

## Installation

```bash
$ npm i @rbnd/react-dark-mode
```

## Usage

### 1. Add provider to the root of your app

```jsx
import { DarkModeProvider } from "@rbnd/react-dark-mode"

const App = () => {

  // ...

  return (
    <DarkModeProvider>
      {/* Your other components */}
    </DarkModeProvider>
  )
}
```

### 2. Change modes

```jsx
import { useDarkMode } from "@rbnd/react-dark-mode"

const Settings = () => {
  const { mode, setMode } = useDarkMode()

  return (
    <>
      <Button
        onClick={() => setMode("dark")}
        active={mode === "dark"}>
        Dark
      </Button>
    </>
  )
}
```

### 3. Implement styles

Class name will be applied to the html element.

```css
.light-mode {
  color-scheme: light;
  background-color: white;
  color: black;
}
.dark-mode {
  /* Don't forget the color-scheme css attribute. This will avoid light scrollbars in dark mode. */
  color-scheme: dark;
  background-color: black;
  color: white;
}
```

### 4. Get rid of the flash

Copy the `noflash.min.js` from `node_modules/@rbnd/react-dark-mode/src/noflash.min.js` to your `public` folder and add it as a script to your `<head>`.

```html
<html>
  <head>
    <!-- ... -->
    <script src="/noflash.min.js">
  </head>
  <body>
  </body>
</html>
```

---

Created by [rbnd.studio](https://rbnd.studio/). Check out [Atmos](https://atmos.style/) our tool for creating professional color palettes, hey it's free!