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
        <Repos className="repos" title="Alo" />      

        
        <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
                <li > <a href="#"> Nome Repo</a></li>
                <li > <a href="#"> Nome Repo</a></li>
            </ul>
        </div>
    </div>
)

export default App