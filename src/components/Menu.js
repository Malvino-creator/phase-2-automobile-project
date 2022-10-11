import React, { useState, useEffect } from "react";
// import { MenuList } from "./MenuList";
import MenuItem from "./MenuItem";
import "../styles/Menu.css";


function Menu() {
    const[menu, setMenu]= useState([])
    useEffect(()=>{
        fetch ("https://pantherapizza26.herokuapp.com/products")
        .then(resp => resp.json())
        .then(data => setMenu(data))
    },[])

    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {menu.map((menuItem) => {
                    return (
                        <MenuItem
                            key={menuItem.name}
                            image={menuItem.image}
                            name={menuItem.name}
                            price={menuItem.price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Menu;