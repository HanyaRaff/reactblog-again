import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function BlogLIst({ blogs , handleDelete}) {
  return (
    <div className="blog-list">
      {
        blogs.map((blog) => (
          <div className="blog-preview">
            <Link to={`blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.author}</p>
            {/* <button onClick={() => handleDelete(blog.id)}>delete</button> */}
            </Link>
          </div>
        ))
      }
    </div>
  )
}
