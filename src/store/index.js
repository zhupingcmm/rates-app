import {createStore} from "redux";

const rootReducer = (state={rates:[], usdRates:[], gbdRates:[], currencyMode:"USD",curentCurrency:"USD"}, action) => {
    const {type, data} = action;
    if(type === 'UPDATE_REATES'){
        return {
            ...state,
            rates: state.rates.concat(data)
        }
    }
    if(type === 'UPDATE_USD_REATES'){
        return {
            ...state,
            usdRates: state.usdRates.concat(data)
        }
    }
    if(type === 'UPDATE_GBD_REATES'){
        return {
            ...state,
            gbdRates: state.gbdRates.concat(data)
        }
    }
    if(type === 'UPDATE_DAILY_AVERAGE_MODE'){
        return {
            ...state,
            currencyMode: data
        }
    }
    if(type === 'UPDATE_CURRENT_CURRENCY'){
        return {
            ...state,
            curentCurrency: data
        }
    }
    return state;
}

const store = createStore(rootReducer);

export default store;