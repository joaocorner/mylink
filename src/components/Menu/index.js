import './menu.css';//import css file
import { BsLinkedin, BsGithub } from 'react-icons/bs';//import icons
import { Link } from 'react-router-dom';//import Link from react-router-dom

export default function Menu() {//Menu is the component to be rendered
  return (
    <div className="menu">
      <a
        className="social"
        href="https://www.linkedin.com/in/joaoeduardocorner">
        <BsLinkedin size={24} color="#fff" />
      </a>
      <a
        className="social"
        href="https://www.github.com/joaocorner">
        <BsGithub size={24} color="#fff" />
      </a>
      <Link className="menu-item" to="/links">
        My Links
      </Link>
    </div>
  )
}