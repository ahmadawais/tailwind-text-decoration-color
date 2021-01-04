# Text Decoration Color - Tailwind CSS Utility Plugin

[![npm](https://img.shields.io/npm/v/tailwind-text-decoration-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-text-decoration-color)
[![npm](https://img.shields.io/npm/dt/tailwind-text-decoration-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-text-decoration-color)

This plugin generates classes for anchor link text-decoration coloring carets using `text-decoration-color: <color>;`. Where the `<color>` part comes from your tailwind config colors — so you can use `decoration-gray-500` or custom colors `decoration-sop-900`.

## Installation

Pull it in through npm or yarn:

```bash
npm install tailwind-text-decoration-color
```

```bash
yarn add tailwind-text-decoration-color
```

## Usage

Add it to the plugins array of your Tailwind config.

```js
plugins: [
  // Other plugins
  require('tailwind-text-decoration-color')(),
],
```

For each color in `colors` config of tailwind a `decoration-{color}` class is created, analog to `bg-` and `text-` classes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
