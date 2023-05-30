import { useEffect, useState } from 'react'

export default function useFetch(url) {

  const [data, setdata] = useState(null)
  const [pending, setPending] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setTimeout(() => {

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Cannot Fetch The End Point..');
        }
        return res.json()
      })
      .then((data) => {
        setPending(false)
        setdata(data)
      })
      .catch((err) => {
        setError(err.message)
        setPending(false)
      })
    }, 1000);
  }, [url]);

  return {data,pending,error}
}