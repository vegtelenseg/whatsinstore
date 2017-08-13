import React, { Component } from 'react';
import '../generated-sources/search.css';
class Search extends  Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    }
  }
  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  checkIfEnter = (e) => {
    if (e.key === 'Enter') {
      console.log("Enter pressed");
    }
  }
  render() {
    return (
      <div className="search-container">
        <input id="search-bar"
            value={this.state.inputValue}
            onChange={this.updateInputValue.bind(this)}
            onKeyPress={this.checkIfEnter.bind(this)}
            placeholder="Search for a product"/>
      </div>
    );
  }
}

export default Search;
