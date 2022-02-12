import { API_KEY } from './default-api-keys'
import { PAGE_SIZE } from './system-params'

const BASE_URL = 'travel-advisor.p.rapidapi.com'

const travelAdvisor = {
    hotels: {
        get: {
            method: 'get',
            url: `https://${BASE_URL}/hotels/list`,
            params: {
                location_id: '293919',
                adults: '1',
                rooms: '1',
                nights: '2',
                offset: '0',
                currency: 'USD',
                order: 'asc',
                limit: PAGE_SIZE,
                sort: 'recommended',
                lang: 'en_US',
            },
            headers: {
                ...API_KEY,
                'x-rapidapi-host': BASE_URL,
            },
        }
    },
    restaurants: {
        get: {
            method: 'GET',
            url: `https://${BASE_URL}/restaurants/list`,
            params: {
                location_id: '293919',
                restaurant_tagcategory: '10591',
                restaurant_tagcategory_standalone: '10591',
                currency: 'USD',
                lunit: 'km',
                limit: PAGE_SIZE,
                open_now: 'false',
                lang: 'en_US'
            },
            headers: {
                ...API_KEY,
                'x-rapidapi-host': BASE_URL,
            }
        }
    }
}

export default travelAdvisor
