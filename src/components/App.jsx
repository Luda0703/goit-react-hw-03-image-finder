import React, { Component } from 'react';
// import axios from 'axios';
import { Searchbar }from './Searchbar/Searchbar';

export class App extends Component {
  // state = {
  //   searchQuery: '',
  //   page: 1,
  //   per_page: 12,
  // };

  // componentDidMount() {
  //   const KEY = "35573875-4d45445cc9cc07d3b69f02897";
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   fetch(`${BASE_URL}?q=${this.searchQuery}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.per_page}`)
  //   .then(response => response.json())
  //   .then(searchQuery => this.setState({ searchQuery }));
    
  // }
  
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    )
  }
};




      
      

