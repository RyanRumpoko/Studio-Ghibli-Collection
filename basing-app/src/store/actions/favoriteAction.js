const addFavorite = (card) => {
  return {
    type: 'FAVORITE/ADD',
    payload: card
  }
}

export default addFavorite