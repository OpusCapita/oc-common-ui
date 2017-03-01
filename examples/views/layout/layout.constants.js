const CONTENT = {
  heading: 'Layout',
  topics: [
    {
      heading: 'Header',
      content: 'Header is optional in desktop and mandatory in mobile.',
    },
    {
      heading: 'Search',
      topics: [
        {
          heading: 'Global',
          content: 'Located at the top of the page.',
          topics: [
            {
              heading: 'Component',
              content: 'It is important not to restyle search bars,' +
                'as their appearance and layout is required to be uniformous everywhere: use common component [not implemented yet].',
            },
          ],
        },
      ],
    },
    {
      heading: 'Content',
      content: 'Main content has margin and scrolls vertically by default.',
    },
    {
      heading: 'Footer',
      content: `Footer is optional. The footer contains the OpusCapita logo, a shorthand copyright notice and a two-line version info.
        The footer is located at the bottom of the viewport if the layout is shorter than the viewport.
        If the layout exceeds the height of the viewport, the footer is found at the bottom of the scrollable content area.`,
    },
    {
      heading: 'Navigation',
      topics: [
        {
          heading: 'Menu',
          content: `The application menu is rendered as a vertical sidebar on the left border of the viewport.
             The application menu levels are kept to as few as possible and provide access to the entire suite of installed applications.`,
          topics: [
            {
              heading: 'Keyboard support and accessibility',
              content: 'Items in menu that take user to different view must be anchors: links can be opened in different page and it can be copied to clipboard.',
            },
            {
              heading: 'Desktop', content: 'Menu is shown always.',
            },
            {
              heading: 'Mobile', content: 'Menu that is toggled via a hamburger icon located on the page heading.',
            },
          ],
        },
      ],
    },
  ],
};

export default CONTENT;
