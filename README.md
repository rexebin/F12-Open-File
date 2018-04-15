# F12 Open File

**F12: Open File** extension is an Typescript Definition Provider, which means it only react to 'Go to Definition' or F12 in a Typescript file.

Use case: open Angular's `templateUrl` and `styleUrls` at a key stroke: F12 when cursor is within the url quotes, without any configuration.

## Usage

1.  move cursor to file name string in the typescript file. A file name must be a string with single or double quote with relative path and file extension.
2.  press F12 to open.
3.  File is opened side by side to the Typescript file. Add the following configration to `User Settings` to open in new tab:

```
"openFile.openSideBySide": false
```

## Configuration

Default configuration:

```
"openFile.openSideBySide": true
```

## Features

1.  Only works with **relative** paths with full file name and extensions
1.  Supported file extensions: html, scss, less, ts, sass, js, json, md, jsx

## Release Notes

### 0.0.2

Fix MacOS path invalid bug.

### 0.0.1

Initial release.

[Source code](https://github.com/rexebin/F12-Open-File)
