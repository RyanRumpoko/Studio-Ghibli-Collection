import React from 'react'

function CardDetail(props) {
  return (
    <div className="card mb-3" style={{ backgroundColor: "rgba(245, 245, 245, 0.8)" }}>
      <div className="row no-gutters">
        <div className="col-md-4" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <img src={props.image.img} alt="Studio Gibli" style={{ width: "350px" }} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h4 className="card-title">{props.card.title}</h4>
            <p className="card-text">{props.card.description}</p>
            <p className="card-text"><small>Director: {props.card.director}</small></p>
            <p className="card-text"><small>Producer: {props.card.producer}</small></p>
            <p className="card-text"><small>Release: {props.card.release_date}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
