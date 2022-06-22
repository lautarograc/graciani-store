import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faHome, faUser, faAddressCard, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import CartWidget from './CartWidget';
export default function NavBar() {  
    return (
      <div className="navbar">
          <div className="navbar-brand">
        <li className="navbar-item">
            <FontAwesomeIcon icon={faStore} />
            <span>Store</span>
        </li>
            </div>
        <li className="navbar-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon={faHome} /><span>Home</span></a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon={faAddressCard} /> Contact</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon={faSignInAlt} />Login</a>
        </li>
        <li className="navbar-item">
          <a className="nav-link" href="#"><FontAwesomeIcon icon= {faUser} /> Register</a>
        </li>
        <li className="navbar-item">
          <a className='nav-link' href="#"><CartWidget /></a>
        </li>
      </div>
    );
  }