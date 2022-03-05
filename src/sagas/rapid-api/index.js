import coinRankingSagas from './coin-ranking.sagas'
import travelAdvisorSagas from './travel-advisor.sagas'
import globalCurrencySagas from './global-currency.sagas'

export default [
    ...coinRankingSagas,
    ...travelAdvisorSagas,
    ...globalCurrencySagas
]