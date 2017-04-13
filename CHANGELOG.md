# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## 0.1.3

* `wizard` scroll to selected tab when changing tabs with arrow buttons
* `wizard` hide scroll arrows if there is nothing to scroll
* `searchBar` is now stateless, has icon in button and has callback for value change

## 0.1.2

* `wizard` leaked ul and li style definitions to wizard content

## 0.1.1

* `searchbar` empty value validation, local state for value and callback action gets value as parameter

## 0.1.0

* `dropdown-menu` icon size set explicitly.
* [Webpack 2](https://webpack.js.org/) taken into use.

## 0.0.19

* `responsive-navbar` modified to render components as navItems.

## 0.0.18

* `mainLayout` HoC renamed as `applicationLayout`.
* `applicationLayout` HoC uses `Sidebar` react component for aside and burger icon takes array of classes as parameter for customization.
* `$oc-radius-content` variable added to `_variables.scss` for defining content radius in application.

## 0.0.17

* `fonts` and `styles` are included in the npm package as is.
* updated `LICENSE-3RD-PARTY.md`
* obsolete dependencies removed
* unused `Lato` fonts removed
* webpack cleans build path `lib`
* fonts are included in [name].[ext] format instead of with hashes since they do not change often
* `main.scss` does not import Glyphicons in order to have simpler configuration and due to reason that they will be dropped in Bootstrap v4
* `mainLayout` component styles improved and card like look works with all major browsers: IE 11+, Opera, Firefox and Chrome

## 0.0.16

* Move package.json dependencies to devDependencies (multiple react instances error)

## 0.0.15

* Add Wizard component

## 0.0.14

* Add Pinned and Search icons
* ESLint fixes

## 0.0.13

* Add icons to alerts
* Complete unit tests for all components
* Add airbnb eslint rules

## 0.0.12

* Fix ResponsiveNavbar margins and hrefs

## 0.0.11

* Add responsive-navbar
* Added temporary icon for Matching product.

## 0.0.10

* icons.scss added to `styles` and imported in main.scss.
* added 'Matching' product icon

## 0.0.9

* Nothing

## 0.0.8

* Card component `margin` removed.

## 0.0.7