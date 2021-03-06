import React, { Component } from 'react';
import '../generated-sources/search.css';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4300');
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
  componentWillMount = () => {
    socket.on('product changed', (data) => {
      return this.props.updateMarkersData(data)
    })
  }
  checkIfEnter = (e) => {
    if (e.key === 'Enter') {
      const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
      });
      fetch(`/api/food?q=${this.state.inputValue}`, headers)
        .then((data) => {
          return data.json();
      }).then(parsed => {
          let result = Object.keys(parsed).map(function(key) {
          return [parsed[key]];
        });
        return this.props.setMarkersData(result, this.state.inputValue);
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
