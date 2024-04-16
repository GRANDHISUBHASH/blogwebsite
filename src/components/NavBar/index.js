// import React from 'react';
// import {Link} from 'react-router-dom'
// import './index.css'
// 
// const NavBar=()=> {
//   return (
//     
//   );
// }
// export default NavBar
// 
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">
          <img className="logo" src="https://tse1.mm.bing.net/th/id/OIG4.VjryjI3ssNNY_BN937Lw?w=270&h=270&c=6&r=0&o=5&pid=ImgGn" alt="Logo" />
        </div>
        <div className="links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/About Me" className="nav-link">About</Link>
          <Link to="/Contact Us" className="nav-link">Contact</Link>
          <Link to="/AddYourBlog" className="nav-link">Add Your Blog</Link>
        </div>
      </div>
    </nav>
  );
}
