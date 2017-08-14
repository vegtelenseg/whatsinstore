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
      const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      /*let data = {
      bestBefore: '08/04/18',
      checkoutRate:9,
      inStock: 23,
      lat: -26.107567,
      lng: 28.056702,
      productBrand: 'Tiger Brands'
    }*/
    fetch(`/api/food?q=${this.state.inputValue}`, headers)
      .then((data) => {
        return data.json();
      }).then(parsed => {
        return this.props.setMarkersData(parsed, this.state.inputValue);
      });
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
