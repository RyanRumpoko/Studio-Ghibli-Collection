import { useEffect, useState } from 'react'

function ApiFetch(url) {
  const [dataFilms, setDataFilms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText)
        }
        return res.json()
      })
      .then((data) => setDataFilms(data))
      .catch((err) => {
        setError(err)
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return [dataFilms, loading, error]
}

export default ApiFetch
