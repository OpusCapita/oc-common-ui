# Changelog

* In general follow (https://docs.npmjs.com/getting-started/semantic-versioning) versioning.

## <next>
* Update favicon icon

## 6.1.5
* Upgrade to @opuscapita/react-grid@2.2.1

## 6.1.4
* Fix for filter items of `DropdownMultiSelect` in IE
* Upgrade to @opuscapita/react-grid@2.2.0

## 6.1.3
* Both development and production versions added to npm package
* Upgrade to @opuscapita/react-grid@2.1.3

## 6.1.2
* Update favicon icon
* Upgrade to @opuscapita/react-grid@2.1.0

## 6.1.1
* DropdownMultiSelect performance update
* Upgrade to @opuscapita/react-grid@2.0.5

## 6.1.0
* Change disabled label color for checkbox and radio inputs
* Change placeholder color for `DropdownMultiSelect`
* Update favicon icon
* Add keyboard events to `DropdownMultiSelect` and `MultiSelect`
* Upgrade to @opuscapita/react-alerts@1.1.1
* Upgrade to @opuscapita/react-grid@2.0.4
* Upgrade packages

## 6.0.0
* Separate `Alerts`, `Cards`, `FloatingSelect`, `Datagrid` and `Icons` to own repository.

## 5.0.4
* NavItem id set correctly in responsive-navbar

## 5.0.3
* Fixed responsive navbar to handle cases where active key is out of range.

## 5.0.2
* Fix Tab and arrow keys navigation of `Datagrid` after dependencies update

## 5.0.0
* Fix Tab and arrow keys navigation for disabled columns of `Datagrid`
* Responsive navbar modifications and new features
* Update dependencies, update Webpack to version 3.5.5 and NPM to version 5.4.0

## 4.4.1
* Fix Tab issue in editing mode of `Datagrid`
* Add align to input components of `Datagrid` if prop `align` is set

## 4.4.0
* Add `FloatingSelect` and `FloatingSelectCreatable` components
* Fix datagrid tooltip position

## 4.3.1
* Fix import for `ConfirmDialog`
* Add ID attribute to the datagrid html

## 4.3.0
* Added props `disableSave` and `disableCancel` to disable wizard buttons.
* Default button titles in `Wizard` set to Save and Close
* Only the active step is highlighted in the navbar of `Wizard` component.
* Added ConfirmDialog component.

## 4.2.5
* Add `hasRequiredProps` and `hasRequiredPropsErrors` and wrap `name` as a label in `Wizard`
* Change hover and selected colors of select options
* Add `item.id` as required prop to `ResponsiveNavbar`

## 4.2.4
* Change items' structure and checkedItems type of `DropdownMultiSelect` and `MultiSelectItem` components to make them compatible with `react-select` structure
* datagrid row/cell height style adjustments

## 4.2.3
* Change `string` type to one of `element` and `string` type to `Wizard`'s `localizationTexts` and step `name` props
* Add disabled property to navigation buttons of `Wizard`

## 4.2.2
* recompiled package

## 4.2.1
* Fix message with values for datagrid tooltip
* Added tooltip props for expand and collapse buttons in card component header
* Added 'disableFilteringControls' prop to the Datagrid

## 4.2.0
* Add `disableActionsMessage` prop to `Datagrid` to display over disabled actions
* Fix datagrid filtering when component type is select, show exact matches only
* Increase Alert component z-index value to keep it at top of other elements like scrollbars
* Add `disableActionSave` prop to `Datagrid`
* Combine error and warning status for cells with 'error' type prioritized in `Datagrid`
* Add grey corner to edited cells of `Datagrid`
* Add navigation between cells of `Datagrid` with arrow keys in editing mode
* Add `onEditClick` callback to `Datagrid`

## 4.1.3
* fix to datagrid's scroll to row functionality

## 4.1.2
* Changed datagrid to scroll to first selected item
* Fix filtering in datagrid with number and boolean values
* Fix datagrid inline-edit while filtering enabled
* Fix to wizard component button layout (issues with IE11 and Firefox)
* Fix for datagrid checkbox alignments. Do not render tooltip if cell is checkbox type.
* Fix for datagrid row select checkbox. Checkbox doesn't affect to row selection.

## 4.1.1

## 4.1.0

* Update Wizard styles and add possibility to hide page indicator
* Add Inspector icon
* `Menu` component accepts addiotional properties from outside via spread operator, nested levels have indentation and has `uppercase` boolean property for setting 1st level text in upper case.
* Remove margin-left for `DropdownMultiSelect` and set default text color for `MultiSelectItem` to override bootstrap validation inheritance
* Fix datagrid datepicker validation errors in IE11
* DropdownControls component exported from the datagrid

## 4.0.0

* Remove react-router dependency from responsive-navbar and menu
* Fix dropdown menu button background color in IE
* Fix error in examples dev mode if there's no redux dev tools installed

## 3.2.0

* `Datagrid` component added
* Add Matching icon
* Add initial documentation to alerts, cards, responsive-navbar, spinner, and wizard
* Add examples directory to ESLint
* Fix ESLint errors in examples
* Remove unneeded packages

## 3.1.0

* Variables `$oc-border-radius-base|small|large` added
* Rounded corners removed from `Bootstrap` framework and `react-select` component
* Case sensitive fix for `Lato` font family urls in styles

## 3.0.0

* [npm scope](https://docs.npmjs.com/misc/scope) `@opuscapita` added to the package name
* Package set to public
* `Cards` fix collapse/expand icon container placement
* `Menu` component added
* `KEY_CODES` constant added
* `PerfProfiler` utility component added
* `DropdownMenu`, `MultiSelect`, and `MultiSelectItem` components refactored
* `DropdownContainer`, `DropdownMultiSelect` components added

## 2.0.1

* `ResponsiveNavbar` add timeout to componentDidMount to wait for real rendering
* `ApplicationLayout` disabled touch for sidebar: drag area on left is reserved by browser e.g. in iPad, sidebar burger icon fill is white.
* npm script `examples` is now `docs` and related files are renamed accordingly
* `MultiSelect` and `MultiSelectItem` components added

## 2.0.0

* Change package name from 'ocfrontend' to 'oc-common-ui'
* Change lib style and js file names from 'ocfrontend' to 'oc-common-ui'
* `npm run examples` outputs examples to docs folder that is used for Github pages
* Removed unneeded code from examples
* `docs` does not use hashes for `js`-files in order not to generate delete/add operations for commits

## 1.0.0

* Published to OpusCapita Github

## 0.2.0

* `wizard` fix horizontal auto scrolling
* `styles` variables for configuring fonts
* `eslint`either fixed or disabled temporarily
* npm version promotion checks eslint rules

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
