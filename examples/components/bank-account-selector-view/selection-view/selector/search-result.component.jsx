/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */

import React, { PropTypes } from 'react';
import {
  Button,
} from 'react-bootstrap';

import './search-result.scss';


class SearchResults extends React.Component {

  getColumnData = (result, level) => {
    if (result.data.length < level + 1) {
      return <div className="search-result-cell" />;
    }
    const value = result.data[level].replace(this.props.searchTerm,
      `<span class="highlight">${this.props.searchTerm}</span>`);
    return (
      <div
        className="search-result-cell"
        dangerouslySetInnerHTML={{ __html: value }}
      />
    );
  }

  getSearchResultRows = (searchResults, levels) => (
    searchResults.map((result, i) => (
      <div className="search-result-row" key={i}>
        {levels.map(level => (
          <div className="search-result-cell" key={level}>
            {this.getColumnData(result, level)}
          </div>
        ))}
        <div className="search-result-cell">
          <Button
            disabled={this.isSelected(result.id).all &&
              !this.isSelected(result.id).parent}
            onClick={() => {
              const path = result.path;
              let index;
              if (result.data.length === levels.length) {
                index = path.splice(-1, 1)[0];
              }
              if (this.isSelected(result.id).selected) {
                this.props.unmark(path, index);
              } else {
                this.props.setMarked(path, index);
              }
            }}
          >
            {this.isSelected(result.id).selected
              ? 'unselect' : 'select' }
          </Button>
        </div>
      </div>),
    )
  )

  isSelected = (id) => {
    const result = {
      selected: false,
      all: false,
      parent: false,
    };
    for (let i = 0; i < this.props.selectedIds.length; i += 1) {
      if (this.props.selectedIds[i].id === id) {
        return {
          selected: true,
          all: this.props.selectedIds[i].all,
          parent: this.props.selectedIds[i].parent,
        };
      }
    }
    return result;
  }

  render() {
    const levels = [...Array(this.props.lastLevel + 1).keys()];
    return (
      <div id="search-results">
        <div className="search-result-row bold-row">
          {levels.map(i => (
            <div className="search-result-cell" key={i}>{`Level ${i}`}</div>
          ))}
          <div className="search-result-cell">Select</div>
        </div>
        {this.getSearchResultRows(this.props.searchResults, levels)}
      </div>
    );
  }
}

SearchResults.propTypes = {
  searchResults: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.string),
    path: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
  lastLevel: PropTypes.number.isRequired,
  setMarked: PropTypes.func.isRequired,
  unmark: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default SearchResults;
