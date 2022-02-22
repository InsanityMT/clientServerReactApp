import React from 'react'
import { components } from 'react-select'
import Option from './SearchOption.styles'
import Icon from '../../../../components/Icon/Icon'

const SearchOption = (props) => {
    const { value, label, iconUrl } = props.data
    return (
        <components.Option {...props}>
            <Option to={value}>
                <span>{label}</span>
                <Icon url={iconUrl} width={20} height={20} />
            </Option>
        </components.Option>
    )
}

export default SearchOption
