# Change Log

All notable changes to the **F12: Open File** extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.01]

* Initial release

1.  this extension is an Typescript Definition Provider, which means it only react to 'Go to Definition' or F12 in a Typescript file.
2.  supported file types: html, scss, less, ts, sass, js, json, md, jsx. It does not do anything if the extension is not supported.
3.  this extension look for `./` or `../` to determine if the lookup string is a valid relative path. Therefore it doesn't react to any strings not starting with `.`
