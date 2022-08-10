import React from "react";
import { Link } from 'react-router-dom';

const HeaderLogo:React.FC =() =>{
    return(
        <div className="header__logo">
                <Link to="/">
                    
                    <h2> Petshop </h2>
                    <p>Друг вашего питомца</p>
                </Link>
            </div>
    )
}

export default HeaderLogo