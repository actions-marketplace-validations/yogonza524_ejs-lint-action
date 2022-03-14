# EJS Lint Action
Simple action to validate all .ejs files in a certain directory

## Requirements

Your repo must have a folder with ```.ejs``` files
![Folders](https://i.imgur.com/89SX0Fw.png)

## Example

Given a "templateFolder" inside your repo, you must set next action
```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check if templates are correct using EJS Lint
        uses: yogonza524/ejs-lint-action@v1.3
        with:
          folder: path/to/templateFolder
```

**Full Changelog**: https://github.com/yogonza524/ejs-lint-action/compare/v1.2...v1.3