
import BlogLIst from './BlogLIst'
import useFetch from './useFetch'

export default function Home() {

  const {data,pending,error} = useFetch('http://localhost:8000/blogs');

  // const handleDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id)
  //   //blog.id not equal to id artinya id yang sama seperti blog.id akan di hilangkan dan selain itu akan di masukkan/filter

  //   setBlogs(newBlog)
  // }



  return (
    <div className='Home'>
      {error && <p>{error}</p>}
      {pending && <p>Is Loading...</p>}
      {data && <BlogLIst blogs={data}  />}
      {/* Yang Bawah Alternatif  */}
      {/* {
    blogs?<BlogLIst blogs={blogs} handleDelete={handleDelete}/>:console.log('error')
    } */}
    </div>
  )
}
