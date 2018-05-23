import React, { Component } from 'react';

//define the functional component
// const SearchBar = () => {
//     return <input /> ;
// };

// a class based component

class SearchBar extends Component{
 render() {
     return <input onChange={event => console.log(event.target.value)}  />;
 }
//Event handler replaced with arrow function above

// onInputChange(event) {
//     console.log(event.target.value);
//   }
// }

//instance of the class new SearchBar


export default SearchBar;
