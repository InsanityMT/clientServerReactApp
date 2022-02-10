const travelAdvisor = {
    get: {
        method: 'get',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
        params: {
            location_id: '293919',
            adults: '1',
            rooms: '1',
            nights: '2',
            offset: '0',
            currency: 'USD',
            order: 'asc',
            limit: '30',
            sort: 'recommended',
            lang: 'en_US',
        },
        headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key':
                '9524c669ddmshabc0702ad0bce62p10d7b7jsnd6a339812332',
        },
    },
    post: {
        method: 'post',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/v2/list',
        params: {
            currency: 'USD',
            units: 'km',
            lang: 'en_US',
        },
        headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key':
                '9524c669ddmshabc0702ad0bce62p10d7b7jsnd6a339812332',
        },
        data: {
            geoId: 293928,
            checkOut: '2021-06-30',
            sort: 'PRICE_LOW_TO_HIGH',
            sortOrder: 'asc',
            filters: [
                { id: 'deals', value: ['1', '2', '3'] },
                { id: 'price', value: ['31', '122'] },
                { id: 'type', value: ['9189', '9201'] },
                { id: 'amenity', value: ['9156', '9658', '21778', '9176'] },
                { id: 'distFrom', value: ['2227712', '25.0'] },
                { id: 'rating', value: ['40'] },
                { id: 'class', value: ['9572'] },
            ],
            rooms: [
                { adults: 2, childrenAges: [2] },
                { adults: 2, childrenAges: [3] },
            ],
            boundingBox: {
                northEastCorner: {
                    latitude: 12.248278039408776,
                    longitude: 109.1981618106365,
                },
                southWestCorner: {
                    latitude: 12.243407232845051,
                    longitude: 109.1921640560031,
                },
            },
            updateToken: '',
        },
    },
}

export default travelAdvisor
