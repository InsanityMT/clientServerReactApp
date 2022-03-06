import React, { useMemo, useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ExchangesView from './Exchanges.view'
import ALL_CURRENCIES from '../../../../constants/all-currencies'
import {
    deleteKeysFromObject,
    findByKey,
    getKeyAt,
    getValueAt,
    sortByKey,
} from '../../../../utils/object'
import { deleteCurrency } from './actions'
import actions from '../../../../actions'

const ExchangesModel = () => {
    const dispatch = useDispatch()
    const getExchange =
        actions.rapidApiActions.globalCurrencyActions.getExchange

    const [focusedElement, setFocusedElement] = useState(null)

    const { currencies } = useSelector((state) => state.exchangesReducer)

    const focusedItem = useRef(null)

    const all_currencies = useMemo(
        () =>
            sortByKey(
                deleteKeysFromObject(ALL_CURRENCIES, Object.keys(currencies))
            ),
        [currencies]
    )

    const addCurrency = (code) => {
        dispatch(
            getExchange(
                getKeyAt(currencies, 0),
                code,
                getValueAt(currencies, 0)
            )
        )
    }

    const loadCurrencies = (from, value) => {
        if (value) {
            Object.keys(currencies).forEach((to) => {
                if (from !== to) {
                    dispatch(getExchange(from, to, value))
                }
            })
        }
    }

    const removeCurrency = (code) => {
        dispatch(deleteCurrency(code))
    }

    const onKeyDown = (e) => {
        let key = findByKey(all_currencies, e.key)
        if (e.target.textContent === 'Add currency' && key) {
            setFocusedElement(key)
        }
    }

    useEffect(() => {
        console.log(focusedItem)
        if (focusedItem.current) focusedItem.current.scrollIntoView()
    }, [focusedItem.current?.id])

    useEffect(() => {
        dispatch(
            getExchange(
                getKeyAt(currencies, 0),
                getKeyAt(currencies, 1),
                getValueAt(currencies, 0)
            )
        )
    }, [])

    return (
        <ExchangesView
            currencies={currencies}
            addCurrency={addCurrency}
            removeCurrency={removeCurrency}
            allCurrencies={all_currencies}
            loadCurrencies={loadCurrencies}
            onKeyDown={onKeyDown}
            focusedElement={focusedElement}
            focusedItem={focusedItem}
        />
    )
}

export default ExchangesModel
