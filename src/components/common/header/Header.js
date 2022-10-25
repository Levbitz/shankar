import React, { useState } from "react";
import "./header.css";
import { nav } from "../../../assets/data/Data";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { FiFacebook } from "react-icons/fi";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className=" flex">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li onClick={() => setNavList(false)} key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <span>
              <a href="#home">
                <BsFacebook size={20} />
              </a>
            </span>

            <span>
              <a href="#home">
                <FaTwitter size={20} />
              </a>
            </span>

            <p>
              <span>
                <a href="#home">
                  <BsInstagram size={20} />
                </a>
              </span>
            </p>
            <p>
              <span>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size={20} />
                </a>
              </span>
            </p>
            <p>
              <span>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsFillTelephoneFill size={20} />
                </a>
              </span>
            </p>
          </div>

          <div className="toggle">
            <div onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-2x fa-times"></i>
              ) : (
                <i className="fa fa-2x fa-bars"></i>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
