import React from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game from "../../assets/console-controller.png";
import automobile from "../../assets/car-rear.png";
import sports from "../../assets/trophy-star.png";
import entertaiment from "../../assets/ticket.png";
import tech from "../../assets/microchip.png";
import music from "../../assets/music-alt.png";
import blogs from "../../assets/blog-text.png";
import news from "../../assets/newspaper.png";
import jack from "../../assets/gambar10.jpeg";
import simon from "../../assets/gambar11.jpeg";
import tom from "../../assets/gambar12.jpeg";
import megan from "../../assets/gambar14.jpeg";
import cameron from "../../assets/gambar15.jpeg";

const Sidebar = ({ sidebar, category, setCategory }) => {
    return (
        /* pengecekan nilai sidebar, kondisi ? hasil_benar : Hasil_salah*/
        <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
            <div className="sortcut-link">
                <div
                    className={`side-link ${category === 0 ? "active" : ""}`}
                    onClick={() => setCategory(0)}
                >
                    <img src={home} alt="Home icon" />
                    <p>Home</p>
                </div>
                <div
                    className={`side-link ${category === 20 ? "active" : ""}`}
                    onClick={() => setCategory(20)}
                >
                    <img src={game} alt="Gaming icon" />
                    <p>Gaming</p>
                </div>
                <div
                    className={`side-link ${category === 2 ? "active" : ""}`}
                    onClick={() => setCategory(2)}
                >
                    <img src={automobile} alt="Automobiles icon" />
                    <p>Automobiles</p>
                </div>
                <div
                    className={`side-link ${category === 17 ? "active" : ""}`}
                    onClick={() => setCategory(17)}
                >
                    <img src={sports} alt="Sports icon" />
                    <p>Sports</p>
                </div>
                <div
                    className={`side-link ${category === 24 ? "active" : ""}`}
                    onClick={() => setCategory(24)}
                >
                    <img src={entertaiment} alt="Entertainment icon" />
                    <p>Entertainment</p>
                </div>
                <div
                    className={`side-link ${category === 28 ? "active" : ""}`}
                    onClick={() => setCategory(28)}
                >
                    <img src={tech} alt="Technology icon" />
                    <p>Technology</p>
                </div>
                <div
                    className={`side-link ${category === 10 ? "active" : ""}`}
                    onClick={() => setCategory(10)}
                >
                    <img src={music} alt="Music icon" />
                    <p>Music</p>
                </div>
                <div
                    className={`side-link ${category === 22 ? "active" : ""}`}
                    onClick={() => setCategory(22)}
                >
                    <img src={blogs} alt="Blogs icon" />
                    <p>Blogs</p>
                </div>
                <div
                    className={`side-link ${category === 25 ? "active" : ""}`}
                    onClick={() => setCategory(25)}
                >
                    <img src={news} alt="News icon" />
                    <p>News</p>
                </div>
                <hr />
            </div>
            <div className="subscribe-list">
                <h3>Subscribe</h3>
                <br />
                <div className="side-link">
                    <img src={jack} alt="" />
                    <p>Messi</p>
                </div>
                <div className="side-link">
                    <img src={simon} alt="" />
                    <p>Yamal</p>
                </div>
                <div className="side-link">
                    <img src={tom} alt="" />
                    <p>Raphinha</p>
                </div>
                <div className="side-link">
                    <img src={megan} alt="" />
                    <p>Pedri</p>
                </div>
                <div className="side-link">
                    <img src={cameron} alt="" />
                    <p>Halan</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
