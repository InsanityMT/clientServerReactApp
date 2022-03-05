import React from 'react'
import { IconStyles } from './Icon.styles'

const Icon = ({ url, width = 50, height = 50, onClick = null }) => {
    return (
        <IconStyles onClick={onClick} width={width} height={height}>
            <object
                data={url}
                width={width}
                height={height}
                style={{
                    pointerEvents: 'none',
                }}
            />
        </IconStyles>
    )
}

export default Icon
