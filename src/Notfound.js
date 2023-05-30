import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Notfound() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Page not Found..</p>
      <Link to="/">Back To Home</Link>
    </div>
  )
}
