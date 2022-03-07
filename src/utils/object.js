import _ from 'lodash'

const deleteKeysFromObject = (object, keys = []) => {
    const newObject = _.cloneDeep(object)

    return _.omit(newObject, keys) || null
}

const getKeyAt = (object, idx) => {
    return Object.keys(object)[idx] || null
}

const getValueAt = (object, idx) => {
    return Object.values(object)[idx] || null
}

const sortByKey = (object) => {
    return Object.keys(object)
        .sort()
        .reduce((obj, key) => {
            obj[key] = object[key]
            return obj
        }, {})
}

const findByFirstLetter = (object, letter) => {
    let res = Object.keys(object).find(
        (item) => item.charAt(0).toUpperCase() === letter.toUpperCase()
    )

    return res || null
}

export {
    deleteKeysFromObject,
    getKeyAt,
    getValueAt,
    sortByKey,
    findByFirstLetter,
}
