import React from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu-burger.png";
import logo from "../../assets/WhatsApp Image 2025-01-18 at 21.51.56.jpeg";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/add_circle_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import more_icon from "../../assets/menu-dots-vertical.png";
import notification_icon from "../../assets/notifications_45dp_E8EAED_FILL0_wght400_GRAD0_opsz48.svg";
import profil_icon from "../../assets/gambar13.jpeg";
import { Link } from "react-router-dom";

const Navbar = ({ setSidebar }) => {
    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img
                    className="menu_icon"
                    onClick={() =>
                        setSidebar((nilai_awal) =>
                            nilai_awal === false ? true : false
                        )
                    }
                    src={menu_icon}
                    alt=""
                />
                <Link to="/">
                    <img className="logo" src={logo} alt="" />
                </Link>
                <Link to="/">
                    <h2>YouSuf</h2>
                </Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img className="search_icon" src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profil_icon} className="user-icon" alt="" />
            </div>
        </nav>
    );
};

export default Navbar;

//               kondisi ? ekspresi_jika_true : ekspresi_jika_false
// const hasil = (5 > 3) ?       "Benar"      :       "Salah";
