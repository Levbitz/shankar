import React from "react";
import "./AdminNav.css";
import { Link } from "react-router-dom";
import { auth } from "../../assets/lib/Firebase/Firebase";
import { signOut } from "firebase/auth";

function AdminNav() {
  return (
    <div>
      <nav
        style={{
          background: "#27ae60",
        }}
        className=""
      >
        <div className="levbitz_container admin_nav_wrap">
          <div class="nav-wrapper ">
            <Link to="/profile" class="brand-logo">
              MyAds
            </Link>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <Link to="/post_ad">Post Ad</Link>
              </li>
              <li>
                <Link to="/profile">Dashboard</Link>
              </li>

              <li>
                <span onClick={async () => await signOut(auth)}>Logo out</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
