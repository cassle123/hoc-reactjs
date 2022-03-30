import React from 'react'
import {MenuList} from '../helpers/Menulist.js'
import MenuItem from '../components/MenuItem.js';
import '../style/Menu.css'
function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Our List</h1>
        <div className="menuList">
            {MenuList.map((menuItem, key)=>{
                return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} />;
            })}
        </div>
    </div>
  )
}

export default Menu