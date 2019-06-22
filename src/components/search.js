'use strict'

import React, {PropTypes} from 'react'

const Search = ({handleSearch}) => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuario'
            onKeyUp={handleSearch} />
    </div>
)

Search.propType ={
    handleSearch : PropTypes.func.isRequired
}


export default Search