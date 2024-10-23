import React from 'react';
import Link from 'next/link';
import '../styles/style.css';

const Header = () => {
  return (
    <div>
      <nav className='headerContainer'>
      <div className={'logo'}>
        LOGO
      </div>
        <ul className={'navItems'}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contactUs">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
