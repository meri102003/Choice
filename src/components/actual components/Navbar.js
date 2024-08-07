import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
    const menuList = ['About', 'Products', 'Order', 'Delivery', 'Contact']
  return (
    <nav>
        <ul className='navigation_menu'>
            <li onClick={() => {
                  window.scrollTo({ top : 0, behavior : 'smooth' });
            }}><Link to='/'>Home</Link></li>
            {menuList.map(menu => {
              return <li key={Math.random()} onClick={() => {
                  window.scrollTo({ top : 0, behavior : 'smooth' });
              }}><Link to={`/${menu}`}>{menu}</Link></li>
            })}
        </ul>
    </nav>
  )
}