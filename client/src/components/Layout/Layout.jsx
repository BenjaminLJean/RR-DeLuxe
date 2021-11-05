import { Link } from "react-router-dom"
import Footer from "../Footer/Footer"


export default function Layout(props) {
  return (
    <div>
      <header>
        <h1> RR-DELUXE </h1>
        <Link to='/login'>Login</Link>
        <br />
      </header>
      {props.children}

    </div>
  )
}
