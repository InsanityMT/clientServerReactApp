import React from 'react'

const Icon = ({ url, width = 50, height = 50 }) => {
    return (
        <object data={url} width={width} height={height}>
            ''
        </object>
    )
}

export default Icon
