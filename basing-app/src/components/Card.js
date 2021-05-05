import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import addFavorite from '../store/actions/favoriteAction'
import swal from 'sweetalert'

function Card(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { favorites } = useSelector(state => state.favorites)
  function handleClick() {
    history.push(`/detail/${props.card.id}`)
  }
  function handleFavorite() {
    let checkFavorites = false
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id === props.card.id) {
        checkFavorites = true
      }
    }
    if (!checkFavorites) {
      dispatch(addFavorite(props.card))
      swal({
        title: "Success!!",
        text: "Added to favorites!",
        icon: "success",
      });
    } else {
      swal({
        title: "Error!!",
        text: "This already in your favorites!",
        icon: "error",
      });
    }
  }
  return (
    <>
      <div className="col-10 col-md-3 col-lg-2 my-3">
        <div className="card text-center" style={{ backgroundColor: "rgba(245, 245, 245, 0.4)" }}>
          <button className="btn p-0" onClick={handleClick}>
            <img src={props.image.img} className="card-img-top" alt="Studio Gibli" style={{ height: "300px" }} />
          </button>
          <div className="card-body" style={{ height: "85px" }}>
            <h5 className="card-title">{props.card.title}</h5>
          </div>
          <button className="btn btn-danger" onClick={handleFavorite}>
            Add to Favorites
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
