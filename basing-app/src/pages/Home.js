import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import movieAction from "../store/actions/movieAction";
import ImageJSON from "../data/image.json";
import useDebounce from "../hooks/Debaunce";
import Card from "../components/Card";

function Home() {
  // Dispatch API
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieAction("https://ghibliapi.herokuapp.com/films"));
  }, [dispatch]);
  const { movies, loading } = useSelector((state) => state.movies);

  // Image JSON
  const dataImage = ImageJSON;

  // Debaunce
  const [name, setName] = useState("");
  const [dbValue, saveToDb] = useState("");
  const debounce = useDebounce((nextValue) => saveToDb(nextValue), 1000);
  const searchByName = (event) => {
    const { value: nextValue } = event.target;
    setName(nextValue);
    debounce(nextValue);
  };
  const filterByName = movies.filter((result) => {
    return result.title.toLowerCase().includes(dbValue.toLowerCase());
  });

  return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "20vh" }}
        >
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
        <div className="container-fluid" style={{ marginTop: "10vh" }}>
          <div className="row justify-content-center">
            <div className="col-10 col-md-6 col-lg-4 mt-3">
              <input
                value={name}
                onChange={(event) => searchByName(event)}
                type="search"
                className="form-control"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            {filterByName.map((el, idx) => {
              const data = [];
              dataImage.map((dataImg) =>
                dataImg.id === el.id ? data.push(dataImg) : {}
              );
              return <Card key={el.id} card={el} image={data[0] || "..."} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
