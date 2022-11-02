import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../assets/lib/Firebase/Firebase";
import "./LoginPage.css";

import {
  // Timestamp,
  doc,
  // setDoc,
  updateDoc,
} from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
//import NavBarTwo from "../../Business/BusinessComponents/NavBarTwo/NavBarTwo";

function LoginPage() {
  // const { closeSubmenu } = useGlobalContext();

  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  let navigate = useNavigate();

  const { email, password, error, loading } = data;

  const [clicked, setClicked] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setClicked(true);
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/profile", { replace: true });
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <>
      <div className="loginPage_wrap">
        <div className="container">
          <div className="row">
            <div className="col l3"></div>
            <div className="col l6 s12">
              <div className="white loginForm_wrap">
                <h4 className="center">Shankar Admin </h4>
                {error ? <p className="error red-text">{error}</p> : null}
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col l12 s12 center">
                      <div className="input-field input-outlined ">
                        <input
                          name="email"
                          onChange={handleChange}
                          id="user_email"
                          type="text"
                        />
                        <label htmlFor="user_email">User Email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col l12 s12 center">
                      <div
                        style={{
                          position: "relative",
                        }}
                        className="input-field input-outlined "
                      >
                        <input
                          name="password"
                          onChange={handleChange}
                          id="user_password"
                          type={visiblePassword ? "text" : "password"}
                        />
                        <small
                          style={{
                            position: "absolute",
                            right: 5,
                            top: "30%",
                            zIndex: 1,
                          }}
                        >
                          {visiblePassword ? (
                            <AiFillEye
                              onClick={() => setVisiblePassword(false)}
                              size={20}
                            />
                          ) : (
                            <AiFillEyeInvisible
                              size={20}
                              onClick={() => setVisiblePassword(true)}
                            />
                          )}
                        </small>
                        <label htmlFor="user_password">User Password</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col l12" />

                    <button
                      style={{
                        height: "45px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        margin: "auto",
                        backgroundColor: "#00bcd4",
                      }}
                      className="valign-wrapper btn  "
                      disabled={loading}
                    >
                      {clicked ? (
                        <>
                          <div className="preloader-wrapper small active">
                            <div className="spinner-layer spinner-green-only">
                              <div className="circle-clipper left">
                                <div className="circle"></div>
                              </div>
                              <div className="gap-patch">
                                <div className="circle"></div>
                              </div>
                              <div className="circle-clipper right">
                                <div className="circle"></div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        "Admin Login"
                      )}
                    </button>
                  </div>

                  <div className="row">
                    <div>
                      <p>
                        Forgot your password? <Link to="/reset">Reset</Link>
                      </p>

                      <p>
                        Go Back to <Link to="/">Home Page</Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col l3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
