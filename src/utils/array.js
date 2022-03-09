import _ from 'lodash'

//Arrays []

const findByFirstLetter = (arr, letter) => {
    let res = arr.find(
        (item) => item.charAt(0).toUpperCase() === letter.toUpperCase()
    )

    return res || null
}

//Collections [{}]

const findItemInCollectionByKeyValue = (collection, key, value) => {
    return _.find(collection, {[key]: value}) || null
}

const filterCollectionByKeyValue = (collection, key, value) => {
    return collection.filter((item) => item[key].includes(value)) || []
}

const getUniqValuesFromCollectionByKey = (collection, key) => {
    return [...new Set(collection.map(o => o[key] ||  null))]
}

export {
    findByFirstLetter,
    findItemInCollectionByKeyValue,
    filterCollectionByKeyValue,
    getUniqValuesFromCollectionByKey
}
