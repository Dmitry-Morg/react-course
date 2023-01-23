import "./Post.css"

function Post({userId,id,  title, body}) {

  return (
    <div className="post">
      <small>{id}</small>
      <h2>{title}</h2>
      <p>{body}</p>
      <h2>User id: {userId}</h2>
    </div>
  )
}
 
export default Post;
