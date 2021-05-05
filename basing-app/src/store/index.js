import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import favoriteReducer from './reducers/favoriteReducer'
import movieReducer from './reducers/movieReducer'

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  movies: movieReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
