export const CONTENT = {
  heading: 'Introduction',
  topics: [
    { 
      heading: 'Who is this guide for?',
      topics: [
        { 
          heading: '', 
          content: `Please note that this guideline is to be followed with new products and for existing or rebranded products common sense should be used in which level following of this guideline makes sense.`
        },
      ]
    },
    { 
      heading: 'Why is this guide important?',
      topics: [
        { 
          heading: '', 
          content: `This document explains the high level principles for the user interface decisions, but also acts as a practical guide when extending the services and building new features.`
        },
      ]
    },
    {
      heading: 'Implementations',
      topics: [
        { heading: 'New', content: 'New and still under development implementations follow guidelines defined in this document.' },
        { 
          heading: '3rd party and rebranding', 
          content: 'On minimum 3rd party implementations can rebrand by changing logo, colors and typography.',
          unordereds: [ 
            {
              heading: 'Mandatory',
              items: [
                'Use the brand colors in your layouts.',
                'Show the OpusCapita logo.',
                'Use the logo and its background color as presented in this guide.',
                'Use OpusCapita favicon.',
                'Use the correct typography (Lato Sans).',
                'Use the footer as shown in this document.',
                'Pay attention to margins and avoid crowded looks.',
              ]
            },
            {
              heading: 'Recommended',
              items: [
               'Use recommended relative font sizes.',
               'Build new icons according the guidelines.',
               'Use the common button style.',
              ]
            },
            {
              heading: 'Mandatory',
              items: [
               'Layout of the content area elements can vary.',
               'You may use traditional input fields in case recommended option is not available.',
              ]
            }
          ]
        },
        { heading: 'Existing', content: 'Apply 3rd party fully and parts from  new wherever possible with reasonable effort.' },
      ]
    }
  ]
}