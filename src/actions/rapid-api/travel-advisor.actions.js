import {
    restaurantsReq,
    hotelsReq,
} from '../../requests/rapid-api/travel-advisor.requests'

const reqByType = {
    hotels: hotelsReq,
    restaurants: restaurantsReq,
}

const getByType = (type, params) => {
    return {
        type: 'GET_BY_TYPE_REQUEST',
        request: reqByType[type](params),
        byType: type,
    }
}

export default {
    getByType,
}
