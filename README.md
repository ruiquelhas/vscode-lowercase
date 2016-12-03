# vscode-lowercase
Convert selection to lowercase in [Visual Studio Code](https://github.com/Microsoft/vscode).

[![Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![Travis](https://img.shields.io/travis/ruiquelhas/vscode-lowercase.svg?style=flat-square)](https://travis-ci.org/ruiquelhas/vscode-lowercase)
[![Codecov](https://img.shields.io/codecov/c/github/ruiquelhas/vscode-lowercase.svg?style=flat-square)](https://codecov.io/gh/ruiquelhas/vscode-lowercase)

## How it works

### Using the command palette
![Command palette](static/palette.gif)

### Using a keyboard shortcut
![Keyboard shortcut](static/shortcut.gif)

The default keboard shortcut is set to `alt+shift+l`, but you can change it to something else by overriding the `key` value of the `lowercase.tolowercase` command.

## Contributing
Contributions are welcome, either via [issues](https://github.com/ruiquelhas/vscode-lowercase/issues/new) or [pull requests](https://github.com/ruiquelhas/vscode-lowercase/compare).

For any code addition or change, follow the [style guide](http://standardjs.com/rules.html), add the respective tests and make sure the existing ones still pass.

### Running the tests

```sh
$ npm t
```

## License
MIT
