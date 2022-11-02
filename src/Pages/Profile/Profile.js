import React, { useState, useEffect } from "react";
import MyAds from "../../AdminComponents/MyAds/MyAds";
import InactiveAds from "../../AdminComponents/InactiveAds/InactiveAds";
//import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

//import Img from "https://wallpaperaccess.com/full/6295120.jpg";
import "./Profile.css";

import { auth, db, storage } from "../../assets/lib/Firebase/Firebase";
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "firebase/storage";

import { signOut } from "firebase/auth";
import { getDoc, doc, updateDoc } from "firebase/firestore";
//import Delete from "../../components/svg/Delete";
//import Camera from "../../components/svg/Camera";

import AdminNav from "../../AdminComponents/AdminNav/AdminNav";
import Loading from "../../BusinessPage/Loading/Loading";

//import Navbar from "../../components/Navbar/Navbar";
//import NavbarWrap from "../../components/Navbar/NavbarWrap";
//import MyAds from "../../components/MyAds/MyAds";
//import Loading from "../Loading/Loading";

const Img = "https://wallpaperaccess.com/full/6295120.jpg";

const Profile = () => {
  // const { closeSubmenu } = useGlobalContext();
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
        setLoading(false);
      }
    });

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          setLoading(true);
          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete avatar?");

      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));

        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          avatar: "",
          avatarPath: "",
        });

        // history.replace("/");
        window.location.reload();
        // setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return user ? (
      <>
        <AdminNav />
        <div className="profileWrap">
          <div
            style={{
              height: "35vh",

              background: "#27ae60",
            }}
          >
            <div
              style={{
                paddingTop: "3%",
              }}
            >
              <div className="container">
                <div className="gpt3__header-content">
                  <h4 className=" ">Your Ad Dashboard</h4>
                  <p>keep track of your Ads On Cauvery car</p>

                  <div className="text_container">
                    <p>student Email :{user.email}</p>
                    <hr />
                    <small className="">
                      Joined on: {user.createdAt.toDate().toDateString()}
                    </small>
                    <br />

                    <div
                      style={{
                        marginTop: "2rem",
                      }}
                    >
                      <div className="row">
                        <div className="col l4 s6">
                          <Link
                            style={{
                              marginTop: ".5rem",
                            }}
                            className="btn z-depth-0 red darken-3"
                            to="/post_ad"
                          >
                            post Ad
                          </Link>
                        </div>
                        <div className="col l4 s6">
                          <Link
                            style={{
                              marginTop: ".5rem",
                            }}
                            className="btn z-depth-0 red darken-3"
                            to="/post_ad"
                          >
                            Create New Admin
                          </Link>
                        </div>
                        <div className="col l4 s6">
                          <div>
                            <button
                              style={{
                                marginTop: ".5rem",
                              }}
                              className="btn red z-depth-0 red darken-3"
                              onClick={
                                //sign out and go to home page
                                async () => signOut(auth)
                              }
                            >
                              sign out
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white">
          {" "}
          <MyAds user={user} />
          <hr />
          <InactiveAds user={user} />
        </div>
      </>
    ) : null;
  }
};

export default Profile;

const Camera = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "25px", height: "25px", cursor: "pointer" }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Delete = ({ deleteImage }) => {
  return (
    <svg
      onClick={deleteImage}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "25px",
        height: "25px",
        cursor: "pointer",
        color: "#f24957",
      }}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
