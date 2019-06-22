'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {
                username: 'Wesley',
                repos: 20,
                img: 'https://avatars2.githubusercontent.com/u/12123871?v=4',
                login: 'vvesly',
                followers: 10,
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
    handleSearch(e) {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13
        if (keyCode === ENTER) {
            console.log(value)
            ajax().get(`https://api.github.com/users/${value}`)
                .then((result) => {
                    console.log(result)
                })
        }
    }

    render() {
        console.log(this.state.repos)
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            handleSearch={(e) => this.handleSearch(e)}
        />
    }
}
export default App