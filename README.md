# OpusCapita React components guideline


### Creating a new component

#### Creating a new repository
* Create a new public repository under OpusCapita organization in github. If you don't have rights to do it, contact `@havanki` or `@ilkkalehtinen`. Choose a descriptive name for the repository that says clearly what kind of component it contains.
* Open Settings -> Options -> GitHub Pages and select 'master branch /docs folder' as a Source.

#### Developing a new component
* Create a development branch in git.
* Create basic structure for a react component containing at least `README.md`, `CHANGELOG.md` and `package.json` files, `examples`, `test` and `src` folders. We are currently working on creating a template with a basic structure for a new react component.
* Develop the component.
  Run `npm install` to get the project's dependencies
  Run `npm run build` to produce minified version of the library
  Run `npm run dev` to produce development version of the library.
  Run `npm run test` to run tests
  Run `npm run docs` to run generate examples
  Run `npm run hot` to run source files
* Update `CHANGELOG.md` file with your changes under `next` line.
* Remember to include documentation for your component in `README.md` file, unit tests for all modules and an example showing all possible functions of your component before you make the first pull request with your component.
* Commit and push changes. Don't include `lib` folder in the commits.

#### Merging the development branch with the master 
* Make a pull request for more than one reviewer (the more the better) from the list of contributors below.
* Merge your branch with the master and delete your development branch.

#### Creating the first release tag and publishing the first npm version
* Update `CHANGELOG.md` file by moving changes under `next` line to the created version line in the master branch, commit and push it.
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)
* Run `npm publish --access=public` to publish the first version of the component in npm. If you don't have rights to do it, contact `@havanki` or `@ilkkalehtinen`.

##### Finishing a new component creation 
* Link examples of your component in the `oc-common-ui` repository


### Updating a component
* Clone the repository with the component to update if you haven't done it yet.
* Make a new development branch for the changes.
* Update `CHANGELOG.md` file with your changes under `next` line.
* Update `LICENSE-3RD-PARTY.md` in case lib changes.
* Commit and push changes (excluding `lib`).
* Make a pull request for more than one reviewer (the more the better) from the list of contributors below.
* Merge your branch with the master and delete your development branch.


### Creating a release tag and publishing a npm version
* Update `CHANGELOG.md` file by moving changes under `next` line to the created version line in the master branch, commit and push it.
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)
* Run `npm publish` to publish the created version of the component in npm. If you don't have rights to do it, contact `@havanki` or `@ilkkalehtinen`.


### Demo/examples
* [Demo](https://opuscapita.github.io/oc-common-ui)
* Run `npm run docs` to create output to `examples-build`


### List of contributors
* Boris Horosh `@bo-kh` (Finland)
* Elena Rose `@elefantino` (Finland)
* Esa Riihinen `@eriihine` (Finland)
* Ilkka Lehtinen `@ilkkalehtinen` (Finland)
* Jani Matkala `@naniantero` (Finland)
* Jenni Ristonmaa `@Jen-ni` (Finland)
* Janusz Bugajny `@janekbug` (Poland)
* Kimmo Havantola `@havanki` (Finland)
* Lukasz Frandt `@lukasdt` (Poland)
* Oscar Neira `@OscarNeira` (Finland)
* Sami Karjalainen `@skarjalainen` (Finland)
