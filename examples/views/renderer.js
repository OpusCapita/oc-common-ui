import React from 'react';

export default class Render {
  static topics = (topics, level = 1) => {    
    let getHeading = function(level, heading) {
      switch(level) {
        case 1:
          return <h1>{ heading}</h1>
        break;
        case 2:
          return <h2>{ heading}</h2>
        break;
        case 3:
          return <h3>{ heading}</h3>
        break;
        case 4:
          return <h4>{ heading}</h4>
        break;
        case 5:
          return <h5>{ heading}</h5>
        break;
        default:
          return <h3>{ heading}</h3>          
        break
      }
    }
    
    let getTopics = function(level, topics) {
      level++;
      return topics.map((topic, index) => {
        return <div key={index}>
          { getHeading(level, topic.heading) }
          <p>{ topic.content }</p>
            { topic.topics ? getTopics(level, topic.topics) : null }        
        </div>
      });
    };

    return getTopics(level, topics);
  }
}