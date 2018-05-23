import React, { Component } from 'react';

//define the functional component
// const SearchBar = () => {
//     return <input /> ;
// };

// a class based component

class SearchBar extends Component{
 render() {
     return <input onChange={this.onInputChange}  />;
 }
//Event handler

onInputChange(event) {
    console.log(event.target.value);
  }
}

//instance of the class new SearchBar


export default SearchBar;
