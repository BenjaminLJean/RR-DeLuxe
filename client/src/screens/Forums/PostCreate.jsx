import { useState } from "react"


export default function PostCreate(props) {

  const [formData, setFormData] = useState({
    name: '',
    content: ''
  });

  const { handlePostCreate, currentUser } = props;

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
      handlePostCreate(formData);
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
