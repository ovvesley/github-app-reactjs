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

    getRepositories(e){
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
        .then((result) => {
            let reposArray = new Array();
            result.forEach(element => {
                let {name, html_url} = element
                let repo = {
                    name,
                    link : html_url
                }
                reposArray.push(repo)                                              
            });

            this.setState({
                repos: reposArray
            })
        })
    }

    getStarred(e){
        ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
        .then((result) => {
            let reposArray = new Array();
            result.forEach(element => {
                let {name, html_url} = element
                let repo = {
                    name,
                    link : html_url
                }
                reposArray.push(repo)                                             
            });
            this.setState({
                repos: reposArray
            })
        })
    }



    render() {
        return <AppContent
            userinfo={this.state.userinfo}
            repos={this.state.repos}
            starred={this.state.starred}
            handleSearch={(e) => this.handleSearch(e)}
            getRepositories={(e) =>this.getRepositories(e)}
            getStarred={(e) => this.getStarred(e)}
        />
    }
}
export default App