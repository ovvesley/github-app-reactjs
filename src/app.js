'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content';
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: []

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
                    this.setState({
                        userinfo: {
                            username: result.name,
                            img: result.avatar_url,
                            login: result.login,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following
                        }
                    })
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