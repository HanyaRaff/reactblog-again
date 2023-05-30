import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Create() {
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState(null)
  const [author, setAuthor] = useState(null)

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title,body,author};

    fetch('http://localhost:8000/blogs',{
      method : 'POST',
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify(blog)
    })
    .then(()=>{
      history.go(-1)
    })
  }

  return (
    <div className="create">
      <h2>Add New Blog</h2>

      <form onSubmit={handleSubmit}>
        <label >Blog Title:</label>
        <input type="text" required onChange={(e) => setTitle(e.target.value)} />

        <label >Blog Body:</label>
        <textarea required onChange={(e) => setBody(e.target.value)} />

        <label >Blog Author:</label>
        <select onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        <button>Add Blog</button>
      </form>
    </div>
  )
}
