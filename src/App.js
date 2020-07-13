import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monster: [
                {
                    name: 'Dragula',
                    id: 0
                },
                {
                    name: 'Frank',
                    id: 1
                },
                {
                    name: 'Hitler',
                    id: 0
                }
            ]
        };
    }
    render() {
        return (
            <div className='App'>
                {this.state.monster.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}
export default App;
