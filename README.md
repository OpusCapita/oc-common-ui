# ocfrontend
* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run examples` to run generate examples

### To use ocfrontend
```javascript
import { CardContent } from 'ocfrontend';
```
Some components needs reducers to be loaded in the redux store, those are done in the main level and are usually already there. Same goes for ocfront styles.

### Development workflow
* Run `npm run examples`
* Open `examples.html`

### Development workflow with project using the package
##### Link local package to your project
* Run `npm link` at `ocfrontend` root to make your local package linkable
* Run `npm link ocfrontend` at project's dir that's using `ocfrontend` to use local package
##### Build and watch the package
* Run `npm run dev` to run webpack in watch mode
##### Unlink local package
* Run `npm unlink ocfrontend` at project's dir that's using `ocfrontend`
* Run `npm install` to install remote copy of the `ocfrontend` package

### Changelog
* Remember to update the CHANGELOG.md file with information about the changes to `src`

### Creating a new release tag
* Run `npm run build`
* Commit changes
* Push changes
* Run `npm version 0.0.x` (use apropriate version number)
* Run `git push origin v0.0.x` (again use the same version number)

### Trouble shooting
* If you get any errors about running many instances of certain npm libraries eg. React, check that your project's webpack is configured to resolve those conflicting packages to your projects `node_modules` directory. [Docs](https://webpack.github.io/docs/configuration.html#resolve-alias)

### Examples
* Demo implementations of the components
* Run `npm run examples` to create output to `examples-build` or `npm run hot` for using hot reload functionality

## Links

Cheatseet for [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).