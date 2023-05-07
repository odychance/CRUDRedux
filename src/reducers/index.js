import { combineReducers } from 'redux'
import productosReducers from './productosReducers'
import alertasReducer from './alertaReducer'

export default combineReducers({
    productos: productosReducers,
    alerta: alertasReducer
})