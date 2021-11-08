import { Link } from "react-router-dom"
import "./Layout.css"


export default function Layout(props) {

  const { children, currentUser, handleLogout } = props

  return (
    <div className='navContainer'>
      <header className='navbar'>
        <img src="https://res.cloudinary.com/dw1j8rhne/image/upload/v1636380009/P4%20Pictures/421ddb8baf0e494fadb2ae7dbac698cf_2_bprqea.png" alt='Grassy Fantasy Field' />

        {
          currentUser ? (
            <div>
              <p>Welcome {currentUser.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className='signinoutButtons'>
              <Link to='/login'>Login</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/signup'>Sign up</Link>
            </div>
          )
        }

        <br />

        {

          currentUser && (
            <div className='playForumButtons'>
              <Link to="/avatar/new">Play</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to='/forums'>Forums</Link>
            </div>

          )}
      </header>
      {children}
    </div>
  )
}
