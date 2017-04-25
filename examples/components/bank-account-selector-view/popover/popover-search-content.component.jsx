import React, { PropTypes } from 'react';

import PopoverSearchItem from './popover-search-item.component';


export default class PopoverSearchContent extends React.Component {

  render() {
    return (
      <div>
        {Object.keys(this.props.searchResults).map(key => (
          <PopoverSearchItem
            key={key}
            item={this.props.searchResults[key]}
          />
        ))}
      </div>
    );
  }
}

PopoverSearchContent.propTypes = {
  searchResults: PropTypes.any.isRequired,
  searchTerm: PropTypes.string.isRequired,
};
