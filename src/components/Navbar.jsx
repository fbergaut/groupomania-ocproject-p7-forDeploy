import React, { useContext } from "react";
import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";
import { UidContext } from "./AppContext";
import LeftNav from "../components/LeftNav"
import LogOut from "./Log/LogOut";

const Navbar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);
    

    return (
       <nav>
           <div className="nav-container">
               <div className="logo">
                   <NavLink exact to="/">
                        <div className="logo">
                            <img src="./img/icon-left-font-monochrome-deepblue.png" alt="logo groupomania" />
                            
                        </div>
                   </NavLink>
               </div>
               {uid ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                            <NavLink exact to="/profil">
                                <h5>Bienvenue {userData.username}</h5>
                            </NavLink>
                        </li>
                        <LeftNav />
                        <LogOut />
                    </ul> 
               ) : (
                   <ul>
                        <li></li>
                        <li>
                            <NavLink exact to="/profil">
                                <i className="fas fa-sign-in-alt"></i>
                            </NavLink>
                        </li>
                    </ul> 
               )}
           </div>
       </nav>
    );
};

export default Navbar;