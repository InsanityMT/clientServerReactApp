const findByFirstLetter = (arr, letter) => {
    let res = arr.find(
        (item) => item.charAt(0).toUpperCase() === letter.toUpperCase()
    )

    return res || null
}

export { findByFirstLetter }
