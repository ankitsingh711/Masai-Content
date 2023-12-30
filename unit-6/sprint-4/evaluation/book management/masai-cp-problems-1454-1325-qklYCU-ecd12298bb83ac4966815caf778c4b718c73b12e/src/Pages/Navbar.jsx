import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <div className="navbar" >
            <h4 className="mythology">
                <Link to="/mythology" className="mythology">
                    Mythology
                </Link>
            </h4>
            <h4 className="mystery">
            <Link to="/mystery" className="mystery">
                    Mystery
                </Link>
            </h4>
            <h4 className="history">
            <Link to="/history" className="history">
                    History
                </Link>
            </h4>
            <h4 className="technology">
                <Link to="/technology" className="technology">
                Technology
                </Link>
            </h4>
        </div>
    )
}
