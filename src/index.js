import React from 'react';
import ReactDOM from 'react-dom'
import Spinner from './Spinner';


class App extends React.Component {


    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => 
                this.setState({ lat: position.coords.latitude}),
            (err) => 
                this.setState({ errorMessage: err.message})
        )
    }
    //when we make a class, we create new class in JS, that has 1 method assigned to 
    //render(), classbased, requirement

    renderContent() {
//conditional rendering
if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>
}
if (!this.state.errorMessage && this.state.alt) {
    return <SeasonDisplay lat={this.state.lat}/>
}

return <Spinner message="Please accept location request"/>

    }
    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
                </div>
        )
           }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

/*
Rules of State
1. Usable with class componenets (w functional w hooks)
2. u will confuse props with state
3. state is a js obj, contains amount of data, 
relevant to singular component]
we have 1 single piece of state or 1 state property relevsant to app componennt
is users latitude

updating state (or updating properties inside JS onj)
 on a component causes the component  to 
(almost) instantly rerender

they key of getting a component to re render is to update its state

statw must be initiliazed when component is 1st created
state contains info about component, which is initizialzed when component is created

state can only be updated using the function 'setState'



Lifecycle

constructor()

render()


componentDidMount() as soon as component shows up on screen
componentDidUpdate() setState() (update state)

benefits of class components
-easier code organization
-can use 'state' -> easier to handle user input
-unerstands lifecycle events -> easier to do things when the app first starts

class components must be a JS class, 
must define render() that returns JSX

state
only use it with class componenets but we could use with functional w/ hooks
state is a JS obj containing data relevant to particular component
we assign state to app component, charged with users latitude and whether or not users message

w.e we update state causes components to re render

 */