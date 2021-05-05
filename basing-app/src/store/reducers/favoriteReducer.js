let initialFavorites = {
  favorites: []
}

const favoriteReducer = (state = initialFavorites, action) => {
  switch (action.type) {
    case 'FAVORITE/ADD':
      return { ...state, favorites: state.favorites.concat(action.payload) }
    default:
      return state
  }
}

export default favoriteReducer
