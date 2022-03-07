import React from 'react'
import { Dropdown } from 'react-bootstrap'

const DropdownView = ({
    onKeyDown,
    items,
    CustomDropdownItem,
    focusedItem,
    focusedEl,
    onSelect,
}) => {
    return (
        <div onKeyDown={(e) => onKeyDown(e.key)}>
            <Dropdown bsPrefix="dropdown">
                <Dropdown.Toggle
                    id="dropdown-custom-components"
                    variant="outline-primary"
                >
                    Add currency
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {items.map((item, idx) => (
                        <Dropdown.Item
                            id={item}
                            key={`${item}_${idx}`}
                            active={focusedItem === item}
                            ref={focusedItem === item ? focusedEl : null}
                            onClick={() => onSelect(item)}
                        >
                            <CustomDropdownItem item={item} />
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropdownView
