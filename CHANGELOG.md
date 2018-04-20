# Change Log

## 0.2.x

Fix： Remove "Promise has no error" warning.
Fix:  Does not do anything if file name is invalid.

## 0.1.0

1.  Now support all files types.
2.  Now resolve definition properly so "No Definition" tooltip doesn't appear.

## 0.0.4

Add Icon and improve readme.

## 0.0.3

1.  Fix: `onDidChangeConfiguration` listener is now disposable.
2.  only activate with Typescript files.

## 0.0.2

Fix: Path not processing correctly on MacOS

## 0.01

* Initial release

1.  this extension is an Typescript Definition Provider, which means it only react to 'Go to Definition' or F12 in a Typescript file.
2.  supported file types: html, scss, less, ts, sass, js, json, md, jsx. It does not do anything if the extension is not supported.
3.  this extension look for `./` or `../` to determine if the lookup string is a valid relative path. Therefore it doesn't react to any strings not starting with `.`
