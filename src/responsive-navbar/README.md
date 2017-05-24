Back to [oc-common-ui](../../README.md)

# Responsive Navbar

### Description

Navbar component that changes to dropdown if content doesn't fit horizontally to the navbar content area.

### Dependencies

None

### Initialization

N/A

### API

#### ResponsiveNavbar

| Prop name | Type                            | Default | Description                        |
| --------- | ------------------------------- | ------- | ---------------------------------- |
| activeKey | number                          | false   | Navbar item to be active initially |
| list      | list [{name: name, href: href}] | false   |                                    |

### Code example

```jsx
import React from 'react';
import { ResponsiveNavbar } from '@opuscapita/oc-common-ui';

function ResponsiveNavbarView() {
  const list = [
    { name: 'Item 1', href: '/item1' },
    { name: 'Item 2', href: '/item2' },
  ];

  const activeKey = 2;

  return (
    <ResponsiveNavbar activeKey={activeKey} list={list} />
  );
}
```

