import "../public/css/header.css";
import { useState } from 'react';

function Header() {
    /**
     * State to control the visibility of the navigation menu
     */
    const [openNav, setOpenNav] = useState(false);

    return (
        <>
            <header>
                <img src={null} alt="SeeBuildings Logo" />
                <div>
                    <button
                        type="button"
                        aria-expanded={openNav}
                        onClick={() => setOpenNav(v => !v)}
                    >
                        {openNav ? "Close Navigator" : "Open Navigator"}
                    </button>
                </div>
            </header>
            <ul id={openNav ? "closeNavigator" : "openNavigator"}>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
            </ul>
        </>
    );
}

export default Header;