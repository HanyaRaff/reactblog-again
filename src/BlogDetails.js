import React from 'react'
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import useFetch from './useFetch'

export default function BlogDetails() {
  const {id} = useParams();
  const {data:blog,error,pending:isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
  const history = useHistory()

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method : 'DELETE'
    }).then(() => {
      history.go(-1)
    })
  }
  return (
    <div className="blog-details">
    { isPending && <div>Loading...</div> }
    { error && <div>{ error }</div> }
    { blog && (
      <article>
        <h2>{ blog.title }</h2>
        <button onClick={handleDelete}>Delete</button>
        <p>Written by { blog.author }</p>
        <div>{ blog.body }</div>
      </article>
    )}
  </div>
  )
}
