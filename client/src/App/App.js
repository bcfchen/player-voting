import React, { Component } from 'react';
import '../App.css';
import VotingPage from '../workflows/VotingPage/VotingPage';

class App extends Component {
    render() {
        return (
                <div className="app">
                    <VotingPage/>
                </div>
        );
    }
}
export default App; 
