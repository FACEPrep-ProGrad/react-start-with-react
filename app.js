/*------------------------------Function----------------------------------*/

// const Container=()=>{
//     return React.createElement(`div`, null,`Hey ProGrads! Welcome to React Learning`,
//         React.createElement(`div`, null, `Let's rock and roll`)
//     );
// }
// const container= document.getElementById('react-container')
// ReactDOM.render(React.createElement(Container), container);

/*--------------------------Class----------------------------------------*/

// class ReactContainer extends React.Component {
//     render() {
//         return React.createElement(`div`, null, `Hey ProGrads`,
//             React.createElement(`div`, null, `Let's rock and roll`)
//         );
//     }

// }
// const container = document.getElementById('react-container');
// ReactDOM.render(React.createElement(ReactContainer), container);


/*------------------------------------JSX----------------------------------------*/ 
class ReactContainer extends React.Component{
    render(){
        return (
            <div>Hello! Welcome to ProGrads
                <div>Let's rock and roll </div>
            </div>)
    }
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container);  


