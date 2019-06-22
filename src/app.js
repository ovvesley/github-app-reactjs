'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                username: 'Wesley',
                repos: 0,
                folowers: 10,
                following: 10,
            },
            repos: [{
                name: 'Repo',
                link: '#'
            }],
            starred: [{
                name: 'Repo',
                link: '#'
            }]

        }
    }

    render() {
        console.log(this.state.repos)
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
        />
    }
}
export default App