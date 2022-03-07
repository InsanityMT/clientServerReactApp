const deleteCurrency = (code) => {
    return {
        type: 'DELETE_CURRENCY',
        payload: { code },
    }
}

export { deleteCurrency }
