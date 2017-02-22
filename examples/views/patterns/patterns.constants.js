export const CONTENT = {
  heading: 'Patterns',
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
          unordereds: [ 
            {
              heading: 'Types',
              items: ['Informational', 'Success', 'Warning', 'Error']              
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
          content: `Bootstrap is used as a basis for implementation.
            Overlapping modals i.e. two at a time should never be used: this is an indication that something is wrong in the workflow.`
        },
      ]
    },
    { 
      heading: 'Confirmations',
      topics: [
        { 
          heading: '', 
          content: `For obtrusive use modals and inline confirmation for unobtrusive. 
            Obtrusiveness depends on the cardinality of the action e.g. invoice deletion requires an obtrusive confirmation.`
        },
      ]
    }
  ]
}