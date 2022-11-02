import React, { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";

import { db, auth } from "../../assets/lib/Firebase/Firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
//import Loading from "../Loading/Loading";
import AdminNav from "../../AdminComponents/AdminNav/AdminNav";

import { SidebarData, Locations } from "../../assets/SideData/SideData";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loading from "../../BusinessPage/Loading/Loading";

const HeroCaroselsettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 2,
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.8,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

function EditAdInfo() {
  const [loading, setLoading] = useState(true);

  console.log(useParams());

  const [user, setUser] = useState();

  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <AdminNav />
        <div
          className=" grey lighten-4 "
          style={{
            overflowX: "hidden !important",
            width: "100% !important",
            paddingBottom: 30,
          }}
        >
          <div
            style={{
              padding: "20px 0px",
              marginBottom: "20px",
            }}
            className="post_showcase_banner black "
          >
            <div className="container">
              <h3 className="white-text">Update Car</h3>
            </div>
          </div>

          <div
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
            }}
            className="container white"
          >
            <div>
              <AdInfo user={user} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default EditAdInfo;

const AdInfo = ({ user }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [value, setValue] = useState(0);

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [results, setResults] = useState([]);

  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [productId, setProductId] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [area, setArea] = useState("");
  const [facilites, setFacilities] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //effect

  useEffect(() => {
    const docRef = doc(db, "ads", id);
    getDoc(docRef).then((doc) => {
      console.log(doc.data());
      setCategory(doc.data().category);
      setRegion(doc.data().region);
      setAddress(doc.data().address);
      setProductId(doc.data().productId);
      setBathroom(doc.data().bathroom);
      setArea(doc.data().area);
      setFacilities(doc.data().facilities);
      setPhoneNumber(doc.data().phoneNumber);
      setTitle(doc.data().title);
      setDescription(doc.data().description);
      setPrice(doc.data().price);
    });
    // setLoading(false);
  }, [id]);
  //effect

  const UpdateHandler = () => {
    updateDoc(doc(db, "ads", id), {
      category: category,
      region: region,
      address: address,
      productId: productId,
      bathroom: bathroom,
      area: area,
      //  facilities: facilities,
      phoneNumber: phoneNumber,
      price: price,
      title: title,
      description: description,
    }).then(() => {
      alert("Document has been update ");
      navigate("/profile");
    });
  };

  return (
    <div>
      <div
        style={{
          padding: "0px 15px",
        }}
        className="container_levbitz "
      >
        <div className="row">
          <Slider {...HeroCaroselsettings}>
            {SidebarData.map((item, index) => {
              const { page, img, categoryUrl, title } = item;
              return (
                <div>
                  <div
                    style={{
                      background: value === index ? "red" : "rgb(244, 51, 151)",
                    }}
                    className="chip white-text"
                    onClick={() => {
                      setValue(index);
                      setIsSubmenuOpen(true);
                      setCategory(categoryUrl);
                    }}
                  >
                    {title}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="post_wrap">
        <div className="row">
          <div className="col l4 s12">
            <div
              style={{
                padding: "5px 15px",
                borderRadius: "10px",
                background: "#c62828 ",
              }}
              className="hide-on-med-and-down"
            >
              {SidebarData.map((item, index) => {
                const { page, img, categoryUrl, title } = item;
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      border: value === index ? "1px solid #fff" : "none",
                      padding: "0px 10px",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      setValue(index);
                      setIsSubmenuOpen(true);
                      setCategory(categoryUrl);
                    }}
                    key={index}
                  >
                    <h6
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                      className="white-text"
                    >
                      {title}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col l8 s12">
            <div className="row">
              <div
                style={{
                  marginTop: "2rem",
                }}
                className="col l12 s12"
              >
                <select
                  onChange={(e) => setRegion(e.target.value)}
                  disabled={isSubmenuOpen === false}
                  className="browser-default  fabian_multiple_select"
                  value={region}
                >
                  <option disabled selected>
                    Region
                  </option>
                  {Locations.map((state) => {
                    return (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="col l12 s12">
                <small className="right">* required</small>
              </div>
              {/* address start */}
              <div className="col l12 s12">
                <small className="right">current Address</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    id="your_address"
                    type="text"
                    value={address}
                  />
                </div>
              </div>

              {/*owner type end */}

              <div className="col l12 s12">
                <div className="row">
                  <div className="col l6 s12">
                    <small
                      style={{
                        //if phorne is not available then display this message
                        color: phoneNumber !== 10 ? "red" : "green",
                      }}
                      className="right"
                    >
                      {" "}
                      *phone number
                    </small>
                    <div className=" input-field input-outlined l6 ">
                      <input
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        id="phone"
                        type="number"
                        required
                        value={phoneNumber}
                      />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="col l6 s12">
                    <small className="right">*maximum price</small>
                    <div className=" input-field input-outlined l6 ">
                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        id="price"
                        type="text"
                        value={price}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col l12 s12 hide">
                <div className="row">
                  <div className="col l6 s6">
                    <div className=" input-field input-outlined l6 ">
                      <input
                        disabled={true}
                        value={user.email}
                        id="your_address"
                        type="text"
                      />
                      {/*<label for="your_address">Address</label>*/}
                    </div>
                  </div>
                  <div className="col l12 s6">
                    <div className=" input-field input-outlined l6 ">
                      <input
                        disabled={true}
                        value={user.name}
                        id="your_address"
                        type="text"
                      />
                      {/*<label for="your_address">Address</label>*/}
                    </div>
                  </div>
                </div>
              </div>
              <h5>Product Information</h5>

              <div className="col l12 s12 hide">
                <small className="right">*maximum price</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setProductId(e.target.value)}
                    id="price"
                    type="text"
                    name="productId"
                  />
                  <label htmlFor="productId">Product Id</label>
                </div>
              </div>

              <div className="col l12 s12">
                <small className="right">*bathroom</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setBathroom(e.target.value)}
                    id="price"
                    type="text"
                    name="bathroom"
                    value={bathroom}
                  />
                </div>
              </div>
              <div className="col l12 s12">
                <small className="right">*squarev ft</small>
                <div className=" input-field input-outlined l6 ">
                  <input
                    onChange={(e) => setArea(e.target.value)}
                    id="price"
                    type="text"
                    name="area"
                    value={area}
                  />
                  <label htmlFor="Area">Area</label>
                </div>
              </div>
              <div className="col l12 s12">
                <small className="right"> * atleast 5 characters minimum</small>
                <div className=" input-field input-outlined l6 ">
                  <textarea
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      height: "80px",
                      background: "#fff",
                    }}
                    id="title"
                    type="text"
                    className="col  s12"
                    value={title}
                  ></textarea>
                  <label htmlFor="title">Title</label>
                </div>
              </div>
              <div className="col l12 s12">
                <small className="right"> * atleast 5 characters minimum</small>
                <div className=" input-field input-outlined l6 ">
                  <textarea
                    onChange={(e) => setFacilities(e.target.value)}
                    style={{
                      height: "80px",
                      background: "#fff",
                    }}
                    id="facilites"
                    value={facilites}
                    type="text"
                    className="col  s12"
                  ></textarea>
                  <label htmlFor="facilites">Facilities</label>
                </div>
              </div>

              <div className="col l12 s12">
                <small className="right"> *25 characters minimum</small>
                <div className=" input-field input-outlined l6 ">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{
                      height: "200px",
                      background: "#fff",
                      padding: "10px 10px",
                      resize: "vertical",
                    }}
                    // minLength
                    id="description"
                    type="text"
                  ></textarea>
                  <label htmlFor="description">Product Description</label>
                </div>
              </div>

              <div className="col l12 s12">
                <div className="row">
                  <div className="col l12">
                    <button onClick={UpdateHandler} className="btn">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
