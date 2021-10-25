import { useState } from 'react';
import { Link } from 'react-router-dom';
import  { Navlinks } from './NavbarData';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const showOpen = () => {
    setOpen(!open)
    setOpenMenu(!openMenu)
  };

  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-main">
        <div className="nav-main-left">
          <Link className="nav-links" to='/'>
          Logo
          </Link>
        </div>
        <div className="nav-main-right">
          <button  className='nav-btn'>
            <p className={open ? 'p2-nav open' : 'p2-nav'} onClick={showOpen}>Menu</p>
          </button>
        </div>
        
         <ul className={openMenu ? 'navBar-items open-menu' : 'navBar-items'} onClick={showOpen}>
              {Navlinks.map((navlink) => {
                return <li className="navBar-link-item" key={navlink.id}><a className="navBar-link" href={navlink.url} key={navlink.id}>{navlink.text}</a></li>
              })}
             
          </ul>
      </div>



      </div>
    </nav>
  )
}

export default Navbar;
