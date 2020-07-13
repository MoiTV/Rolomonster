import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monster: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monster: users }));
    }

    render() {
        return (
            <div className='App'>
                {this.state.monster.map(monsters => (
                    <h1 key={monsters.id}>{monsters.name}</h1>
                ))}
            </div>
        );
    }
}
export default App;
