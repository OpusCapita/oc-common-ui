# Datagrid component
Uses facebook's [fixed-data-table](https://github.com/facebook/fixed-data-table).

## Requirements
- [redux](http://redux.js.org/)
- [react-intl](https://github.com/yahoo/react-intl)

### Example usage
```javascript
import React from 'react';
import { Datagrid } from 'oc-common-ui';

export default class DatagridView extends React.Component {
  render() {
    const columns = [
      {
        header: 'Account Name',
        valueKeyPath: ['name'],
        valueType: 'text',
        width: 200,
      },
      {
        header: 'Account number',
        valueKeyPath: ['accountNumber'],
        valueType: 'text',
        width: 200,
      },
    ];
    return (
      <Datagrid
        id="accounts"
        columns={columns}
    );
  }
}
```

## props
Name | Type | Default | Description
--- | --- | --- | ---
id | string | required | ID of the datagrid
rowsCount | number | required | Number of rows in the grid
columns | array | required | Array of column configuration objects
idKeyPath | array of strings | | Key path to the ID attribute in the data
gridHeader | element | | Grid header displayed on top of grid
actionBar | element | | Action bar element displayed at top right
actionBarLeft | element | | Action bar element displayed at top left
disableDropdown | boolean | | Don't use dropdown menu in the action bar
dropdownMenuItems | array | | Additional dropdown menu items
inlineEdit | boolean | | Enable inline editing
inlineAdd | boolean | | Enable inline adding (defaults to true if inlineEdit is enabled)
filtering | boolean | | Enable column filtering
removing | boolean | | Enable item removing
rowSelect | boolean | | Enable row selecting
rowSelectCheckboxColumn | boolean | | Enable additional checkbox column for row selecting
multiSelect | boolean | | Enable multi selecting on row selecting
selectComponentOptions | Immutable.Map | | Options data for the react-select components
disableActions | boolean | | Disable action bar actions, eg. when other grid busy
disableActionBar | boolean | | Disable action bar rendering
onSave | function | | Callback that is called when save button is clicked
onRemove | function | | Callback that is called when delete is clicked
onCancel | function | | Callback that is called when cancel is clicked
onAddClick | function | | Callback that is called when add is clicked
tabIndex | number | | tabIndex start value, needed when multiple grids on same page
headerHeight | number | | Pixel height of the header row
rowHeight | number | | Pixel height of rows
containerStyle | Object | | Additional styles to be set on the container div
scrollToColumn | number | | Index of column to scroll to
scrollTop | number | | Value of vertical scroll
scrollToRow | number | | Index of row to scroll to
onRowClick | function | | Callback that is called when a row is clicked
onRowDoubleClick | function | | Callback that is called when a row is double clicked
onRowMouseDown | function | | Callback that is called when a mouse-down event happens on a row
onRowMouseEnter | function | | Callback that is called when a mouse-enter event happens on a row
onRowMouseLeave | function | | Callback that is called when a mouse-leave event happens on a row
onScrollStart | function | | Callback that is called when scrolling starts with current horizontal and vertical scroll values
onScrollEnd | function | | Callback that is called when scrolling ends or stops with new horizontal and vertical scroll values
rowClassNameGetter | function | | To get any additional CSS classes that should be added to a row, rowClassNameGetter(index) is called
rowHeightGetter | function | | If specified, rowHeightGetter(index) is called for each row and the returned value overrides rowHeight for particular row
onContentHeightChange | function | | Callback that is called when rowHeightGetter returns a different height for a row than the rowHeight prop. This is necessary because initially table estimates heights of some parts of the content

## column configuration object attributes
Name | Type | Default | Description
--- | --- | --- | ---
header | node | | Column header content
columnKey | string | | Column identifier key (Use if no valueKeyPath)
valueKeyPath | string | | Column content value key path
valueType | string | | Value type [text/number/float/boolean/date]
componentType | string | | Input component type [text/number/float/select/boolean/date]
valueRender | string | | Override value render, rowData as parameter
editValueRender | string | | Override value render in editing mode
createValueRender | string | | Override value render in creating mode
filterValueRender | string | | Override value render in filtering mode
cell | function | | Override cell content renderer, rowIndex as parameter
cellEdit | function | | Override content renderer in editing mode
cellCreate | function | | Override cell content renderer in creating mode
cellFilter | function | | Override cell content renderer in filtering mode
renderComponentProps | object | | Additional props for the render component
editComponentProps | object | | Additional props for the edit component
createComponentProps | object | | Additional props for the create component
filterComponentProps | object | | Additional props for the filter component
width | number | | The pixel width of the column
align | number | | The horizontal alignment of the column
fixed | boolean | | Column is fixed
allowCellsRecycling | boolean | | Recycle cells that are outside viewport horizontally, better horizontal scrolling performance.
disableResizing | boolean | | Disable column resizing this column
disableSorting | boolean | | Disable column sorting this column
disableEditing | boolean | | Disable inline editing this column
flexGrow | number | | The grow factor relative to other columns
sortValueGetter | function | | Getter function for the sort data
sortComparator | function | | Comparator function for the sort data
defaultValue | string, number | | Default value for the item when creating new item
onValueMatchChangeValue | object | | Change other column value if own value matches
disableEditingOnValueMatch | object | | Disable input element of this column when value at keyPath matches
onEditValueChange | function | | Called on edit value change, called with (value, valueKeyPath, rowIndex, dataId)
onCreateValueChange | function | | Called on create value change, called with (value, valueKeyPath, rowIndex)

## onValueMatchChangeValue attributes
Name | Type | Default | Description
--- | --- | --- | ---
matchValue | any | | When this columns data match to this
newValueKeyPath | array of strings | | Change value at this keyPath
newValue | any | | The new value to be inserted

## disableEditingOnValueMatch attributes
Name | Type | Default | Description
--- | --- | --- | ---
matchValueKeyPath | array of strings | | Keypath of the value to be matched
matchValue | any | | The value to be matched