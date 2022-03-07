import React, { useState, useRef, useEffect } from 'react'
import DropdownView from './Dropdown.view'
import { findByFirstLetter } from '../../utils/array'

const Dropdown = ({ CustomDropdownItem, onSelect, items }) => {
    const [focusedItem, setFocusedItem] = useState(items[0])
    const focusedEl = useRef(null)
    const onKeyDown = (key) => {
        setFocusedItem((prevEl) => findByFirstLetter(items, key) || prevEl)
    }

    useEffect(() => {
        focusedEl.current?.scrollIntoView()
    }, [focusedEl.current?.id, focusedEl])

    return (
        <DropdownView
            CustomDropdownItem={CustomDropdownItem}
            onSelect={onSelect}
            items={items}
            onKeyDown={onKeyDown}
            focusedEl={focusedEl}
            focusedItem={focusedItem}
        />
    )
}

export default Dropdown
