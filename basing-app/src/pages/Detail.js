import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import movieAction from '../store/actions/movieAction'
import ImageJSON from '../data/image.json'
import CardDetail from '../components/CardDetail'

function Detail() {
  // Dispatch API
  const checkParams = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(movieAction(`https://ghibliapi.herokuapp.com/films?id=${checkParams.id}`))
  }, [dispatch, checkParams.id])
  const { detail, loading } = useSelector(state => state.movies)

  // Import Image JSON
  const dataImage = ImageJSON
  const data = []
  dataImage.map((dataImg) => dataImg.id === checkParams.id ? data.push(dataImg) : {})
  return (
    <>
      { loading ? (
        <div className="d-flex justify-content-center" style={{ marginTop: "20vh" }}>
          <div className="spinner-border text-danger mx-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-warning mx-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-border text-success mx-3" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
          <div style={{ marginTop: "20vh" }}>
            <div className="row justify-content-center">
              <div className="col-10 col-md-10 col-lg-7" >
                {detail.map((el) => {
                  return <CardDetail key={el.id} card={el} image={data[0]} />
                })}
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Detail