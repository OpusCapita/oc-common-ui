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

| Prop name | Type                            | Default  | Description                        |
| --------- | ------------------------------- | -------- | ---------------------------------- |
| activeKey | number                          | required | Navbar item to be active initially |
| list      | list [{name: name, href: href}] | required |                                    |

| Function | Parameters   | Returns | Description                              |
| -------- | ------------ | ------- | ---------------------------------------- |
| onSelect | href: string |         | Callback fired when the active item changes |

### Code example

```jsx
import { ResponsiveNavbar } from '@opuscapita/oc-common-ui';


const ResponsiveNavbarView = (props) => {
  const list = [
    { name: 'Item 1', href: '/item1' },
    { name: 'Item 2', href: '/item2' },
  ];

  const activeKey = 2;

  return (
    <ResponsiveNavbar
      activeKey={activeKey}
      list={list}
      onSelect={(href) => { props.router.push(href); }}
    />
  );
};

export default withRouter(ResponsiveNavbarView);
```

