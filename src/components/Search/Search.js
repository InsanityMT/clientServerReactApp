import React from 'react'
import { FormControl } from 'react-bootstrap'

const Search = ({ handleChange }) => {
    return (
        <FormControl
            type="text"
            aria-describedby="btnGroupAddon"
            onChange={(e) => handleChange(e.target.value)}
        />
    )
}

export default Search