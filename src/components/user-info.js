'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={userinfo.img} />
        <h1 className='username'>
            <a href={`https://www.github.com/${userinfo.login}`}>{userinfo.username} </a>
        </h1>

        <ul className='repos-info'>
            <li>- Repositorios: {userinfo.repos}</li>
            <li>- Seguidores: {userinfo.followers}</li>
            <li>- Repositorios: {userinfo.following}</li>
        </ul>

    </div>
)
UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        img:PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}


export default UserInfo