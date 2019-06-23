'use strict'
import React from 'react'

const Actions = ({getRepositories, getStarred}) => (
    <div className="actions">
            <button onClick={getRepositories}> Ver Repositorios</button>
            <button onClick={getStarred}> Ver favoritos</button>
        </div>
)


export default Actions