import React from 'react'
import { CardName, CardStyles, CardContent } from './Card.styles'

const Card = ({ item }) => {
    const { name, price, rating, num_reviews, hotel_class, photo } = item
    const medium = photo?.images?.medium

    console.log(item)
    return (
        <>
            {
                name &&
                <CardStyles>
                    <CardName>
                        {name}
                    </CardName>
                    <img src={medium.url} width='200px' height='120px' />
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
