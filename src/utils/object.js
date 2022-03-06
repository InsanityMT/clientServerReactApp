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

const findByKey = (object, key) => {
    let code = Object.keys(object).find((code, idx) => {
        return code.charAt(0) === key.toUpperCase() ? true : false
    })
    return code || null
}
export { deleteKeysFromObject, getKeyAt, getValueAt, sortByKey, findByKey }
