let initialMovie = {
  movies: [],
  detail: [],
  loading: true
}

const movieReducer = (state = initialMovie, action) => {
  switch (action.type) {
    case 'MOVIE/FETCH':
      return { ...state, movies: action.payload, loading: false }
    case 'MOVIE/DETAIL':
      return { ...state, detail: action.payload, loading: false }
    default:
      return state
  }
}

export default movieReducer
