import React from 'react'
import { Link } from 'react-router-dom';
import logoImage from '../../public/Images/logo.jpg'

export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
 <Link to="/home" ><img className='logoImage'  src={logoImage} alt="Luxury"/></Link>       
<Link to="/home">Home</Link>
<Link to="/carList">Car List</Link>
<Link to="/category">Category</Link>
<Link to="/contactUs">Contact Us</Link>
<Link to="/blog">Blog</Link> 
    </nav>
    </>
  );
}
