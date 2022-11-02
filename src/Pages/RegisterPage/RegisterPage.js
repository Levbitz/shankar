import React, { useState } from "react";
import { Link } from "react-router-dom";
//import Navbar from "../../components/Navbar/Navbar";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";
//import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../assets/lib/Firebase/Firebase";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
//import NavBarTwo from "../../Business/BusinessComponents/NavBarTwo/NavBarTwo";

function RegisterPage() {
  // const { closeSubmenu } = useGlobalContext();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });

  let navigate = useNavigate();

  const { name, email, password, error, loading } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name,
        email,
        createdAt: Timestamp.fromDate(new Date()),
        isOnline: true,
        isBlocked: false,
      });
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/", { replace: true });
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <>
      <div>
        <div className="loginPage_wrap ">
          <div className="container">
            <div className="row">
              <div className="col l3"></div>
              <div className="col l6 s12 ">
                <div className="white registerForm_wrap">
                  <h4 className="center">Create New Admin</h4>
                  {error ? <p className="error">{error}</p> : null}
                  <form action="" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col l12 s12 center">
                        <div class="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            name="name"
                            value={name}
                            onChange={handleChange}
                            id="user_email"
                            type="text"
                          />
                          <label for="user_email">Full Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col l12 s12 center">
                        <div class="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            name="email"
                            value={email}
                            onChange={handleChange}
                            id="user_email"
                            type="text"
                          />
                          <label for="user_email">User Email</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col l12 s12 center">
                        <div class="input-field input-outlined ">
                          <input
                            style={{
                              paddingLeft: "1rem",
                              fontSize: "0.9rem",
                            }}
                            name="password"
                            value={password}
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
                          <label for="user_password">User Password</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col l12 s12">
                        <button
                          style={{
                            height: "45px",
                            background: "#094c59",
                            width: "100%",
                            margin: "0 auto",
                          }}
                          className=" btn clickable  "
                          disabled={loading}
                        >
                          {loading ? "Registering ..." : "Register"}
                        </button>
                      </div>
                    </div>
                    {/*<div className="row">
                    <div className="col l12">
                      <button
                        style={{
                          height: "45px",
                          background: "#094c59",
                          width: "100%",
                          margin: "0 auto",
                        }}
                        className="valign-wrapper btn  "
                        disabled={loading}
                      >
                        {loading ? "Registering ..." : "Register"}
                      </button>
                    </div>
                      </div>*/}

                    <div className="row">
                      <div>
                        <p>
                          {" "}
                          Login as ? <Link to="/admin">old Admin !</Link>
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
      </div>
    </>
  );
}

export default RegisterPage;
