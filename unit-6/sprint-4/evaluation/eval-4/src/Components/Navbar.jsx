import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const link = [{path:"/", title:"grocery"}, {path:"/cart", title:"cart"},{path:"/order", title:"order"}];
  return (
    <div>
      {link.map((item)=>{
        return <Link to={item.path}>{item.title}</Link>
      })}
    </div>
  )
}

export default Navbar;
