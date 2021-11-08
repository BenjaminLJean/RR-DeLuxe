import { Link } from "react-router-dom";

export default function Posts(props) {

  const { posts, handlePostDelete, currentUser } = props;

  return (
    <div>
      <h3>Welcome to the Forums</h3>
      <Link to="/forums/new"><button>Create Post</button></Link>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.name}<br />{post.content}</p>

          {currentUser?.id === post.user_id && (
            <div>
              <Link to={`/forums/${post.id}/edit`}><button>Edit</button></Link>
              <button onClick={() => handlePostDelete(post.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}

    </div>
  )
}
