import React, { useRef, useState } from "react";
import "./navdropdown.css";

import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

import { FaLocationArrow } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
import { IoMdApps } from "react-icons/io";

export default function NavdropDown({ isOpen, setIsOpen, setClick, click }) {
  return (
    <div>
      <div className="menu-container">
        <div className={`menu ${isOpen ? "active" : "inactive"}`}>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/category/:p" className="left black-text">
              Residental Property
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link
              to={`/custom_software_development`}
              className="left black-text"
            >
              Commercial Property
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link className="left black-text" to={`/ios_development`}>
              Layouts
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/ecommerce_development" className="left black-text">
              Plots
            </Link>
          </p>

          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/web_development" className="left black-text">
              Apartments
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/mob_development" className="left black-text">
              Rentals
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/artificial_intelligence" className="left black-text">
              Pg
            </Link>
          </p>
          <p
            onClick={() => {
              setIsOpen(!isOpen);
              setClick(!click);
            }}
          >
            <Link to="/digital_marketing" className="left black-text">
              Warehouse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
