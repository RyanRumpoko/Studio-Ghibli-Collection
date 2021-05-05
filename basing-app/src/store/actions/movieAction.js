const movieAction = (url) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      if (url === 'https://ghibliapi.herokuapp.com/films') {
        dispatch({
          type: 'MOVIE/FETCH',
          payload: data
        })
      } else {
        dispatch({
          type: 'MOVIE/DETAIL',
          payload: data
        })
      }
    }
    catch (err) {
      console.log(err)
    }
  }
}

export default movieAction
