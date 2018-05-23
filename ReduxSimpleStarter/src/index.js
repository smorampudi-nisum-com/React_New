import React from 'react' ;
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
//create a component, this component should produce some HTML
//App is also a component class
// API KEY FOR YOUTUBE
const API_kEY = 'AIzaSyAcjo55O_0b02gK_orDSyWAZ9_XsI3HUfQ';


/*const App = function(){
    return <div>Hi</div>;
}
 /* Es6 equivalent code for above function */
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
/*Function is a factory which produces instances of the actual 
components rendered to the DOM.*/

/** "div" here is a component class */

//Take this component generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App></App>,document.querySelector('.container'));

/*document.querySelector('.container') answers where to render the 
app component in DOM */

//React please render my element to the DOM