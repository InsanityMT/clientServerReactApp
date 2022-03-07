import React from 'react'
import {
    CrossContainer,
    CurrenciesWindow,
    CurrName,
    ExchangeContainer,
    ExchangesInput,
    DropdownContainer,
} from './Exchanges.styles'
import Icon from '../../../../components/Icon/Icon'
import cross from '../../../../assets/icons/cross.svg'
import Dropdown from '../../../../components/Dropdown'

const ExchangesView = ({
    currencies,
    loadCurrencies,
    addCurrency,
    removeCurrency,
    allCurrencies,
}) => {
    const CustomDropdownItem = ({ item }) => {
        return (
            <>
                <span className="code">{item}</span>
                <span className="code-description">{allCurrencies[item]}</span>
            </>
        )
    }
    return (
        <CurrenciesWindow>
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
            <DropdownContainer>
                <Dropdown
                    items={Object.keys(allCurrencies)}
                    CustomDropdownItem={CustomDropdownItem}
                    onSelect={addCurrency}
                />
            </DropdownContainer>
        </CurrenciesWindow>
    )
}

export default ExchangesView
