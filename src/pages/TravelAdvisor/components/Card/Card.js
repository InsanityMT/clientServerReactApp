import React from 'react'
import { CardName, CardStyles, CardContent } from './Card.styles'
import Icon from '../../../../components/Icon/Icon'

const Card = ({ item }) => {
    const { name, price, rating, num_reviews, hotel_class, photo } = item
    const url = photo?.images?.original?.url
    return (
        <>
            {
                name &&
                <CardStyles>
                    <CardName>
                        {name}
                    </CardName>
                    <Icon url={url} width={200} height={120} />
                    <CardContent>
                        <span>{price}</span>
                        <span>{num_reviews} reviews - {rating}</span>
                        {hotel_class && <span>{hotel_class} ★</span>}
                    </CardContent>
                </CardStyles>
            }
        </>
    )
}

export default Card
