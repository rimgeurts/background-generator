import React from 'react';
import './search-box.styles.css'

const SearchBox = (props) => {
    return (
        <input className='search'
            type='search' 
            placeholder={props.placeholder} 
            onChange={props.search} >
        </input>
    )
}

export default SearchBox
