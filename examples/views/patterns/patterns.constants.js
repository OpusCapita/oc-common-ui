export const CONTENT = {
  topics: [
    { 
      heading: 'Empty states',
      topics: [
        { 
          heading: '', 
          content: `When e.g. query yields no results it needs to be indicated to the end user clearly.`
        },
      ]
    },
    { 
      heading: 'Selection',
      topics: [
        { 
          heading: '', 
          content: `TODO: How various items are selected e.g. checkbox and ctrl+click...`
        },
      ]
    },
    { 
      heading: 'Scrolling',
      topics: [
        { 
          heading: '', 
          content: `Avoid having horizontal scrollbar. By default content, e.g. text, should wrap and scroll vertically.`
        },
      ]
    },
    { 
      heading: 'Transitions',
      topics: [
        { 
          heading: '', 
          content: `TODO: Navigational transition, animation, e.g. to detailed view...`
        },
      ]
    },
    { 
      heading: 'Notifications',
      topics: [
        { 
          heading: '', 
          content: `Use common component Alerts for showing notifications.`
        },
        { 
          heading: '', 
          content: `Multiple warning and error notification for same reason should not be stacked i.e. previous ones are removed.`
        },
        {
          heading: 'Types',
          topics: [
            { 
              heading: 'Informational', 
              content: `Informational.`
            },
            { 
              heading: 'Success', 
              content: `Success.`
            },
            { 
              heading: 'Warning', 
              content: `Warning.`
            },
            { 
              heading: 'Error', 
              content: `Error.`
            },  
          ]
        }, 
        {
            heading: 'Dismissing',
            topics: [              
              { 
                content: `User can dismiss every type of notification manually.
                    Informational and success are dismissed automatically by default after certain period of time.`
              },
              { 
                content: `By default warning and error notifications are not dismissed automatically.
                  Dismiss behavior and automatic closing time can be adjusted case by case as needed.`
              }
            ]
        }
      ]
    },
    { 
      heading: 'Modals',
      topics: [
        { 
          heading: '', 
          content: ``
        },
      ]
    },
    { 
      heading: 'Confirmations',
      topics: [
        { 
          heading: '', 
          content: ``
        },
      ]
    }
  ]
}