# Multi Lint README

Welcome! You are reading README for Multi Lint extension.

## Features

Lint files with various languages using one command!

### command
* `mlint`

### keyboard shortcut
* `ctrl+l` on linux
* `cmd+l` on mac

Default pairs of languages and linters: 
* `ruby`: `rubocop` 
* `coffeescript`: `coffeelint`

You can connect any recognizing by VsCode language with any linter you want. 
Just read `Extension Settings` 

## How it works?
* copy active file path
* recognize active file language 
* if language is recognized, and linter is defined,
    then run `linter path` in terminal

## Requirements

If you set in settings some linter, it is clear that you must have this linter installed :)

## Extension Settings

You can override languages and setting by overriding settings.json for example with:
    (file->preferences-> extensions-> multi lint -> edit settings.json) 

`{`
`    "mlint.linters": {`
`        "javascript": "js-linter",`
`        "python": "python-linter"`
`    }`
`}`

## Known Issues

There is no one know issue;

## Release Notes


### 1.0.0

Initial release of Multi Lint


-----------------------------------------------------------------------------------------------------------

## Write your own extension
Writing extensions fo VsCode is very easy!
Just visit this page and read more!
* https://code.visualstudio.com/api/get-started/your-first-extension

