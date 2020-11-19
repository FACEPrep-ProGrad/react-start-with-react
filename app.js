//REACT 2 | CHECK N CHECK


//const container = document.getElementById('react-container');


//ReactDOM.render("Hello! Welcome to React", container);





//part II - Use JSX and babel compiler



// class ReactContainer extends React.Component {
// JSX tags
// JSX there should be one parent element
//render() {
// return ( <
// div > Hello!Welcome to ProGrads <
// div > Let 's rock and roll </div> <
//div> )
//  };
// }

// const container = document.getElementById('react-container');
// Direclty pass the component to render
//ReactDOM.render( < ReactContainer / > , container);


//REACT 3 | IS IT A FUNCTION


// Functional component
//const Container = () => {
// return React.createElement(`div`, null, `Hey ProGrads! Welcome to React Learning`,
//   React.createElement(`div`, null, `Let's rock and roll`)
//);
//}
// Render the Container
//const container = document.getElementById('react-container');
//ReactDOM.render(React.createElement(Container), container);


//REACT 3 | NOW IT 'S CLASS TIME



//class ReactContainer extends React.Component {
// constructor - to initialize the state 

// render method to render the react dom 
// render() {
//return React.createElement(`div`, null, `Hey ProGrads`,
//  React.createElement(`div`, null, `Let's rock and roll`)
//);
//}

//}
//const container = document.getElementById('react-container');
//ReactDOM.render(React.createElement(ReactContainer), container);


//part II - Use JSX and babel compiler


class ReactContainer extends React.Component {
        // JSX tags
        // JSX there should be one parent element
        render() {
            return ( <
                div > Hello!Welcome to ProGrads <
                div > Let 's rock and roll </div> <
                /div> )
            };
        }

        const container = document.getElementById('react-container');
        // Direclty pass the component to render
        ReactDOM.render( < ReactContainer / > , container);