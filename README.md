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

### Standalone development workflow
* Run `npm run examples`
* Open `examples.html`

### Development workflow with project using the package
* Run `npm link` at this projects root directory (makes package linkable)
* Remove `node_modules/ocfrontend` directory from your project
* Run `npm link ocfrontend` in your projects directory (links local ocfront to your project)
* Run `npm run dev` to run webpack in watch mode

### Creating a new release tag
* Run `npm run build`
* Commit changes
* Run `npm version 0.0.x` (use apropriate version number)
* Run `git push origin v0.0.x` (again use the same version number)

### Trouble shooting
* If you get any errors about running many instances of certain npm libraries eg. React, check that your project's webpack is configured to resolve those conflicting packages to your projects `node_modules` directory. [Docs](https://webpack.github.io/docs/configuration.html#resolve-alias)
