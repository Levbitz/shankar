import React, { useState, useEffect } from "react";
import { auth, db } from "../../assets/lib/Firebase/Firebase";
//import Certification from "../../assets/profile/certification.png";
import { MdAutoDelete } from "react-icons/md";
//import AdImg from "./MyProfileAdComponents/AdImg/AdImg";

import {
  collection,
  getDocs,
  query,
  where,
  limit,
  startAfter,
  orderBy,
  addDoc,
  serverTimestamp,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import "./MyAds.css";
import { BiTimer } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";

function MyAds({ user }) {
  const navigate = useNavigate();
  const [courses, setcourses] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [collectionIsEmpty, setCollectionIsEmpty] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [error, setError] = useState("");

  const checckerRef = collection(db, "ads");

  const q = query(
    checckerRef,

    limit(9),
    where("email", "==", user.email),
    orderBy("createdAt", "desc"),
    where("active", "==", true)
  );

  useEffect(() => {
    // effect

    //check size of collection

    setLoading(true);

    getDocs(q).then((snapshoot) => {
      //get snapshot size

      if (snapshoot.size === 0) {
        // alert("collection is empty");
        setLoading(false);
        setCollectionIsEmpty(true);
      } else {
        // console.log(snapshoot.docs);
        setLoading(true);
        // setTimeout(() => {

        const term = snapshoot.docs.map((doc) =>
          // console.log(doc.data())
          ({
            id: doc.id,
            data: doc.data(),
          })
        );

        setcourses(term);
        setLoading(false);

        setLastDoc(snapshoot.docs[snapshoot.docs.length - 1]);
      }
    });
    setLoading(false);
  }, []);

  console.log(courses);

  const NewData = collection(db, "ads");

  const LoadMoreHandeler = () => {
    setLoading(true);

    const q = query(
      //orderBy("createdAt", "desc"),
      //    ,

      NewData,
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      where("active", "==", true),

      limit(10)
    );

    getDocs(q).then((snapshoot) => {
      if (snapshoot.size === 0) {
        setLoading(false);
        setCollectionIsEmpty(true);
      } else {
        const term = snapshoot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));

        setcourses([...courses, ...term]);
        setLastDoc(snapshoot.docs[snapshoot.docs.length - 1]);
        setLoading(false);
      }
    });
  };
  console.log(courses);
  return (
    <div className="container">
      <div className="row">
        <div className="col l12 s12">
          <div>
            <div className="row">
              <div className="col l5 s12 ">
                <h4
                  style={{
                    fontSize: 18,
                  }}
                  className=""
                >
                  Your Ads
                </h4>
              </div>
              <div className="col l5 s12 right">
                <small className="right">*maximum price</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    id="price"
                    type="text"
                  />
                  <label htmlFor="numberPlate">number Plate</label>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <h5>Active Leads</h5>
              </div>
            </div>

            <div>
              {courses.length === 0 ? (
                <div>
                  <div className="row ">
                    <div className="col l12">
                      <h5
                        style={{
                          fontSize: 16,
                        }}
                        className=""
                      >
                        You have no Ads now
                      </h5>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/*<img width={80} src={Certification} alt="" />*/}
                  {courses
                    .filter((value) => {
                      if (searchTerm === "") {
                        return value;
                      } else {
                        return (
                          value.data.numberPlate === searchTerm
                          // // .toLowerCase()
                          // .includes(
                          //   searchTerm
                          //   //toLowerCase()
                          // )
                        );
                      }
                    })

                    .map((cour) => {
                      return (
                        <div
                          style={{
                            opacity: cour.data.active === true ? 1 : 0.8,
                          }}
                          key={cour.id}
                          className="col l4 s12   "
                        >
                          <div
                            style={{
                              border: "2px solid #c62828 ",
                              margin: "10px 10px",
                              borderRadius: 10,
                              height: 180,
                            }}
                            className="row "
                          >
                            <div className="col l3 s3 ">
                              <div
                                style={{
                                  marginTop: "30%",
                                }}
                              >
                                {/*  <img
                                className="responsive-img circle"
                                src={cour.data.images[0]}
                                alt=""
                            />*/}
                              </div>
                            </div>
                            <div className="col l9 s8 ">
                              <div
                                style={{
                                  marginBottom: "1rem",
                                }}
                              >
                                <h6
                                  style={{
                                    fontSize: 14,
                                    color: "#004d40 ",
                                  }}
                                  className="my-ads__title truncate"
                                >
                                  {cour.data.title}
                                </h6>
                                <small>{cour.data.numberPlate}</small>
                                <small
                                  style={{ display: "flex" }}
                                  className="black-text"
                                >
                                  <BiTimer
                                    size={18}
                                    style={{ marginRight: 5 }}
                                  />{" "}
                                  Posted On
                                  {cour.data.createdAt.toDate().toDateString()}
                                </small>
                              </div>

                              <div>
                                <div className="row">
                                  <div className="col l2">
                                    <p>
                                      <MdAutoDelete
                                        color="red"
                                        size={20}
                                        onClick={async () => {
                                          await addDoc(
                                            collection(db, "deletedAds"),
                                            {
                                              deletedAt: serverTimestamp(),
                                              id: cour.id,
                                              deleted: false,
                                            }
                                          );
                                          await deleteDoc(
                                            doc(checckerRef, cour.id)
                                          );
                                          await window.location.reload();
                                        }}
                                      />
                                    </p>
                                  </div>
                                  <div className="col l12">
                                    <div
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                      }}
                                    >
                                      <Link
                                        to={`/edit/${cour.id}`}
                                        className="left"
                                      >
                                        Edit content
                                      </Link>
                                      <Link
                                        to={`/edit_img/${cour.id}`}
                                        className="right"
                                      >
                                        Edit Images
                                      </Link>
                                    </div>
                                    <p>Add is active</p>
                                  </div>
                                  <small
                                    onClick={() => {
                                      window.confirm(
                                        "Are you sure you want to Deactivate  this ad?"
                                      ) &&
                                        updateDoc(doc(db, "ads", cour.id), {
                                          active: false,
                                          promotionType: "Free Ad",
                                        }).then(() => {
                                          alert(
                                            "Ad Deactivated successfully As Free Ad"
                                          );
                                          window.location.reload();
                                          navigate("/");
                                        });
                                    }}
                                    style={{
                                      backgroundColor: "red",
                                      color: "#fff",
                                      padding: "0.1rem .5rem",
                                      borderRadius: "0.1rem",
                                      cursor: "pointer",
                                      marginTop: "5rem !important",
                                      fontSize: ".9rem",
                                    }}
                                  >
                                    Deactivate Ad
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "2rem",
          }}
          className="row"
        >
          {loading ? (
            <>
              <div>
                <h4 className="center">Loading....</h4>
                <div className="container">
                  <div className="row">
                    <div className="col l3"></div>
                    <div className="col l6">
                      <div className="center">
                        <img
                          className="responsive-img"
                          src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col l3"></div>
                  </div>
                </div>
              </div>
            </>
          ) : collectionIsEmpty ? (
            <div>No Active Leads</div>
          ) : (
            <>
              <p
                style={{
                  marginTop: "1rem",
                }}
                className="center"
              >
                <span
                  style={{
                    background: "coral",
                    padding: "10px",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={LoadMoreHandeler}
                >
                  Load More Ads
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyAds;
