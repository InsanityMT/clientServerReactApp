import React from 'react'
import {
    CrossContainer,
    CurrenciesDropdownButton,
    CurrenciesWindow,
    CurrName,
    ExchangeContainer,
    ExchangesInput,
} from './Exchanges.styles'
import { Dropdown } from 'react-bootstrap'
import Icon from '../../../../components/Icon/Icon'
import cross from '../../../../assets/icons/cross.svg'

const ExchangesView = ({
    currencies,
    loadCurrencies,
    addCurrency,
    removeCurrency,
    allCurrencies,
    onKeyDown,
    focusedElement,
    focusedItem,
}) => {
    return (
        <CurrenciesWindow onKeyDown={(event) => onKeyDown(event)}>
            {Object.keys(currencies).map((code, idx) => (
                <ExchangeContainer key={`${code}_${idx}`}>
                    <CurrName>{code}</CurrName>
                    <ExchangesInput
                        minLength={1}
                        debounceTimeout={300}
                        onChange={(e) => loadCurrencies(code, e.target.value)}
                        value={currencies[code]}
                        type="number"
                    />
                    {idx > 1 && (
                        <CrossContainer>
                            <Icon
                                url={cross}
                                width={10}
                                height={10}
                                onClick={() => removeCurrency(code)}
                            />
                        </CrossContainer>
                    )}
                </ExchangeContainer>
            ))}
            <CurrenciesDropdownButton
                id="dropdown-basic-button"
                variant="outline-primary"
                title="Add currency"
            >
                <div onClick={(e) => addCurrency(e.target.id)}>
                    {Object.keys(allCurrencies).map((code, idx) => (
                        <Dropdown.Item
                            key={code}
                            id={code}
                            active={focusedElement === code}
                            ref={focusedElement === code ? focusedItem : null}
                        >
                            <span>{code}</span>
                            {allCurrencies[code]}
                        </Dropdown.Item>
                    ))}
                </div>
            </CurrenciesDropdownButton>
        </CurrenciesWindow>
    )
}

export default ExchangesView
