// Import Css
import './Nav.css';

// Import Router Link
import { Link, NavLink } from 'react-router-dom';

// Import Logo
import Logo from '../../assets/logo.png';

// Import NavData
import { navLinks, navRight } from '../../Data/Data'

// Import Icons
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";


export default function Nav() {
  return (
    <nav>
      <div className="container nav-container">
        {/* ............Logo............*/}
        <Link className="logo" to={'/'}>
          <img src={Logo} alt="Logo"/>
        </Link>

        {/* ............Nav-Link............*/}
        <ul className="nav-links">
          {
            navLinks.map(({name, path}, index) => {
              return(
                <li key={index}>
                  <NavLink to={path} className={({isActive}) => 
                isActive ? 'active' : ''}>{name}</NavLink>
                </li>
              )
            })
          }
        </ul>

        {/* ............Nav-Right............*/}
        <div className="nav-right">
          {
            navRight.managements.map((item, index) => {
              return (
                <Link key={index} 
                // target="_blank" 
                className="management-icons" to={item.link}>
                  <item.icon/>
                </Link>
              )
            })
          }
          <button className="menu-button">
            <VscMenu />
            <GrClose />

          </button>
        </div>

      </div>
    </nav>
  )
}
