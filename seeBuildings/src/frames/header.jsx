import "../public/css/header.css";
import logo from "../public/img/seeBuildingLogo.png";
import openNavigationImg from "../public/img/openNavigation.png";
import closeNavigationImg from "../public/img/closeNavigation.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    /**
     * State to control the visibility of the navigation menu
     */
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <header>
                <img src={logo} alt="SeeBuildings Logo" />
                <div>
                    <button
                        type="button"
                        aria-expanded={openNav}
                        onClick={() => setOpenNav(v => !v)}
                    >
                        <img id="navigationImg" src={openNav ? closeNavigationImg : openNavigationImg} alt="Navigation bar img" />
                    </button>
                </div>
            </header>
                <ul id={openNav ? "closeNavigator" : "openNavigator"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/see-buildings">See Buildings</Link></li>
                    <li><a href="#infos">Infos</a></li>
                </ul>
        </>
    );
}

export default Header;