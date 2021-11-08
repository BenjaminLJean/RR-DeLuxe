import { useState } from "react"


export default function AvatarCreate(props) {

  const [formData, setFormData] = useState({
    name: '',
    rank: '',
    status: ''
  });

  const { handleAvatarCreate } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
      rank: 'Runt',
      status: 'Alive'
    });
  };


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleAvatarCreate(formData);
    }}>
      <h1>Create Avatar</h1>
      <label>
        Name:
        <input type='text' value={formData.name} onChange={handleChange} />
      </label>
      <h3>
        Rank:
        <p>Runt</p>
      </h3>
      <h3>
        Status:
        <p>Alive</p>
      </h3>
      <button type="submit">Play</button>
    </form>
  )
}
