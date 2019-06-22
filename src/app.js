'use strict'
import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'
const App = () => (
    <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos
            className="repos"
            title="REPOSITORIOS"
            repos={[{
                name: 'Nome do repositorio',
                link: "#"
            }]}
        />
        <Repos
            className="starred"
            title="FAVORITOS"
            repos={[{
                name: 'Nome do repositorio',
                link: "#"
            }]}
        />
    </div>
)

export default App