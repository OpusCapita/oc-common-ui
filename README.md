# ocfrontend

* Run `npm install` to get the project's dependencies
* Run `npm run build` to produce minified version of the library
* Run `npm run dev` to produce development version of the library.
* Run `npm run test` to run tests
* Run `npm run examples` to run generate examples


To use ocfrontend:

e.g.

import { CardContent } from 'ocfrontend';


Development workflow:


* Run `npm run examples`
* Open `examples.html`


Creating a new release tag:

* Run `npm run build`
* Commit changes
* npm version 0.0.1
* git push origin v0.0.1
