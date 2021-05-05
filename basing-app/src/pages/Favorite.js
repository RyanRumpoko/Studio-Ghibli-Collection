import React from 'react'
import { useSelector } from 'react-redux'

function Favorite() {
  const { favorites } = useSelector(state => state.favorites)

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "20vh" }}>
        <div className="row my-3 justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <table className="table table-borderless">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Title</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "rgba(245, 245, 245, 0.6)" }}>
                {favorites.map((el, idx) => {
                  return (
                    <tr key={el.id}>
                      <td className="my-1">{idx + 1}</td>
                      <td className="my-1">{el.title} / {el.original_title}</td>
                      <td className="my-1">{el.rt_score}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite