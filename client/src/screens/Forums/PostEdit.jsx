import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


export default function PostEdit(props) {

  const [formData, setFormData] = useState({
    name: '',
    content: ''
  });

  const { id } = useParams();
  const { handlePostUpdate, currentUser, posts } = props;


  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        name: postItem.name,
        content: postItem.content
      })
    }
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id])

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: currentUser.username,
      content: value
    });
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePostUpdate(id, formData);
    }}>
      <h1>Create Post</h1>
      <label>
        Name:
        <p>{currentUser.username}</p>
      </label>
      <label>
        Content:
        <input type='text' value={formData.content} onChange={handleChange} />
      </label>
      <button type="submit">Post</button>
    </form>
  )
}
