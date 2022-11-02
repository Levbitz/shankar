import React, { useState, useEffect } from "react";
import { db, storage } from "../../assets/lib/Firebase/Firebase";
import { Link, useNavigate, Navigate } from "react-router-dom";

import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import AdminNav from "../../AdminComponents/AdminNav/AdminNav";

//import { useGlobalContext } from "../../lib/context/GlobalContext/GlobalContext";
//import NavbarWrap from "../../components/Navbar/NavbarWrap";

function PhotoUpload() {
  // const { closeSubmenu } = useGlobalContext();
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);
  const [result, setResult] = useState([]);
  const [myPreview, setMyPreview] = useState([]);
  //const [identifier, setIdentifier] = useState([]);
  const [activation, setActivation] = useState(false);

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
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const onChangeHandler = async (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      const newImage = event.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }

    const filesArray = Array.from(event.target.files).map((file, index) =>
      URL.createObjectURL(file, index)
    );

    setMyPreview((prevImages) => prevImages.concat(filesArray));
    Array.from(event.target.files).map(
      (file, index) => URL.revokeObjectURL(file, index) // avoid memory leak
    );
  };

  //console.log(images.length);
  //console.log(myPreview);

  const handleUpload = async () => {
    setUploading(true);
    const docRef = await addDoc(collection(db, "ads"), {
      createdAt: serverTimestamp(),
      active: true,
      promotionType: "normal",
      category: category,
      region: region,
      address: address,
      area: area,
      // facilites: facilities,
      bathroom: bathroom,

      price: price,
      title: title,
      description: description,
      email: email,
      userName: userName,
    });
    await Promise.all(
      images.map(async (file) => {
        const fileRef = ref(storage, `photos/${docRef.id}/${file.name}`);
        const uploadTask = uploadBytes(fileRef, file, "data_url").then(
          async () => {
            const downloadURL = await getDownloadURL(fileRef);

            await updateDoc(doc(db, "ads", docRef.id), {
              images: arrayUnion(downloadURL),
            });
            // await setIdentifier(docRef.id);
            await setActivation(true);
            await setUploading(false);
            await localStorage.removeItem("data");
            await navigate(`/profile`);
          }
        );
      })
    );
  };

  const renderPhotos = (source) => {
    if (source != null) {
      return source.map((photo, index) => {
        // console.log(index);
        return (
          <div className="col l2 s6" key={photo.id}>
            <p>{photo.id}</p>

            <img
              width={"100%"}
              style={{
                objectFit: "contain",
              }}
              className="responsive-image"
              src={photo}
              alt=""
            />

            {/*<button
              onClick={() => {
                //delete and update fileList
                setImages((prevState) =>
                  prevState.filter((item) => item.id !== photo.id)
                );
                setMyPreview((prevState) =>
                  prevState.filter((item) => item !== photo)
                );
              }}
            >
              delete
            </button>*/}
          </div>
        );
      });
    } else {
      return null;
    }
  };

  const navigation = useNavigate();
  useEffect(() => {
    //getData();
    const data = JSON.parse(localStorage.getItem("data"));

    console.log(data);

    if (data) {
      data.map((item) => {
        setResult([...result, item]);
        setCategory(item.category);
        setRegion(item.region);
        setAddress(item.address);
        setArea(item.area);
        setBathroom(item.bathroom);
        setPhoneNumber(item.phoneNumber);
        setPrice(item.price);
        setTitle(item.title);
        setDescription(item.description);
        setEmail(item.email);
        setUserName(item.userName);
      });
    } else {
      setResult([]);
      // navigation("/post_ad");
      // alert("no resati");
    }
    //setResult(data);
  }, []);

  useEffect(() => {
    setImages(images);
    setMyPreview(myPreview);
  }, [images, myPreview]);
  return (
    <>
      <AdminNav />
      <div>
        <div className="container">
          <div
            style={{
              marginTop: "50px",
            }}
            className="row"
          >
            <div className="col l4 s12">
              <div
                style={{
                  marginTop: 100,
                }}
              >
                <label className="btn" htmlFor="upload">
                  Click Upload Photos
                </label>
                <input
                  className="btn"
                  type="file"
                  name="upload"
                  id="upload"
                  style={{ display: "none" }}
                  placeholder="hffhfhhf"
                  multiple
                  onChange={onChangeHandler}
                />
              </div>
            </div>
            <div className="col l8 s12">
              <div>
                <small className="right red-text">
                  {" "}
                  *minimum should be 3 images
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div
              style={{
                padding: "10px",
                borderWidth: 2,
                borderRadius: 2,
                borderColor: "#eeeeee",
                borderStyle: "dashed",
                backgroundColor: "#fafafa",
                color: "#bdbdbd",
                outline: "none",
                transition: "border .24s ease-in-out",
                width: "100%",
                height: "300px",
                marginTop: "10px",
                borderRadius: "30px",
              }}
            >
              <div className="result">{renderPhotos(myPreview)}</div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col l4">
                {images.length > 2 ? (
                  activation ? null : (
                    <div onClick={handleUpload}>
                      {uploading ? (
                        <>
                          <button
                            class="btn waves-effect waves-light"
                            type="submit"
                            name="action"
                          >
                            uploading...
                            <i class="material-icons right">
                              <div class="preloader-wrapper small active">
                                <div class="spinner-layer spinner-red-only">
                                  <div class="circle-clipper left">
                                    <div class="circle"></div>
                                  </div>
                                  <div class="gap-patch">
                                    <div class="circle"></div>
                                  </div>
                                  <div class="circle-clipper right">
                                    <div class="circle"></div>
                                  </div>
                                </div>
                              </div>
                            </i>
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btn">continue</button>
                        </>
                      )}
                    </div>
                  )
                ) : null}
              </div>
            </div>
          </div>

          <div className="container">
            {/*result ? (
              <div
                style={{
                  marginBottom: "50px",
                }}
              >
                <h6>Add Details</h6>
                <div className="row">
                  <div className="col l2 s3">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <h1
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {category}
                      </h1>
                    </div>
                  </div>
                  <div className="col l2 s6">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {subcategory}
                      </p>
                    </div>
                  </div>
                  <div className="col l2 s3">
                    <div
                      style={{
                        border: "1px solid indigo",
                        borderRadius: "5px",
                      }}
                    >
                      <p
                        style={{
                          color: "indigo",
                          fontSize: "15px",
                          margin: "0",
                          padding: "0",
                        }}
                        className="center"
                      >
                        {state}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col l12">
                    <p>Price type {priceType}</p>
                    <small>Town</small>
                    <p>{city}</p>
                    <small>address</small>
                    <p>{address}</p>
                    <small>phone number</small>
                    <p>{phoneNumber}</p>
                    <small>price</small>

                    <p>{price}</p>
                    <small>title</small>
                    <p>{title}</p>
                    <small>description</small>
                    <p>{description}</p>
                    <small>email</small>
                    <p>{email}</p>
                    <small>user</small>
                    <p>{userName}</p>
                    <p>{fuelType}</p>
                    <p>{bodyType}</p>
                    <p>{transmissionType}</p>
                    <p>{kmDriven}</p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoUpload;
