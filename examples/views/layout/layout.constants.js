export const CONTENT = {
  heading: 'Layout',
  topics: [
    { 
      heading: 'Search',
      topics: [
        { 
          heading: 'Global', 
          content: `Located at the top of the page.`
        },
      ]
    },
    { 
      heading: 'Header',
      content: 'Header is optional in desktop and mandatory in mobile: opened from header.',      
    },
    { 
      heading: 'Content',
      content: 'Main content has margin has scrolls vertically by default.',      
    },
    { 
      heading: 'Footer',
      content: 'Footer is optional.',      
    },
    {
      heading: 'Navigation',
      topics: [
        { 
          heading: 'Menu',
          content: 'Vertical side menu on the left side.',
          topics: [
            { 
              heading: 'Keyboard support and accessibility', 
              content: 'Items in menu that take user to different view must be anchors: links can be opened in different page and it can be copied to clipboard.'
            },
            { 
              heading: 'Desktop', content: 'On desktop the menu is shown always by default.'
            },
            { 
              heading: 'Mobile', content: 'On mobile the menu is not shown by default instead the header is shown with burger for opening the menu.'
            },
          ]
        }
      ]
    }
  ]
}