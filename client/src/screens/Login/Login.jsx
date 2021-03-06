import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Login(props) {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleLogin(formData)
    }}>
      <h3>Login</h3>
      <label> Username:
        <input type='text' name='username' value={username} onChange={handleChange} />
      </label>
      <label> Password:
        <input type='password' name='password' value={password} onChange={handleChange} />
      </label>
      <Link to="/signup">Sign up</Link>
      <button>Submit</button>
    </form>
  )
}
