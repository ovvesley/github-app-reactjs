'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h2>{title}</h2>
        <ul>
            {repos.map((repo) => {
                return (
                    <li key={repo.link} > <a href={repo.link}> {repo.name}</a></li>
                )
            })}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: ''
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.array
}


export default Repos