
import Reducers from './Reducers'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

export default createStore(Reducers,{}, applyMiddleware(ReduxThunk)); 