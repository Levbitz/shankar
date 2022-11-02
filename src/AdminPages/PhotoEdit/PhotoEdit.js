import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
  FieldValue,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, listAll } from "firebase/storage";
import { db, storage } from "../../assets/lib/Firebase/Firebase";

import { getStorage, deleteObject } from "firebase/storage";
import AdminNav from "../../AdminComponents/AdminNav/AdminNav";

function PhotoEdit() {
  // const { closeSubmenu } = useGlobalContext();
  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [images, setImages] = useState([]);

  const [myPreview, setMyPreview] = useState([]);
  //const [identifier, setIdentifier] = useState([]);
  const [activation, setActivation] = useState(false);

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
    // const docRef = await addDoc(collection(db, "Products"));
    await Promise.all(
      images.map(async (file) => {
        const fileRef = ref(storage, `photos/${id}/${file.name}`);
        const uploadTask = uploadBytes(fileRef, file, "data_url").then(
          async () => {
            const downloadURL = await getDownloadURL(fileRef);

            await updateDoc(doc(db, "ads", id), {
              images: arrayUnion(downloadURL),
            });
            // await setIdentifier(docRef.id);
            await setActivation(true);
            await setUploading(false);

            await navigate("/profile");
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
    setImages(images);
    setMyPreview(myPreview);
  }, [images, myPreview]);
  return (
    <>
      <AdminNav />
      <section>
        <div>
          <div className="container">
            <h5>
              Please you have to first delete the current photoes before
              uploading new ones{" "}
            </h5>
            <p className="red-text">
              Note : if you do not delete the current phone new photos will be
              just added to the old ones
            </p>
            <p className="">
              <button
                className="btn btn-large red"
                onClick={() => {
                  updateDoc(doc(db, "ads", id), {
                    images: [],
                  })
                    .then(() => {
                      alert(
                        "old images Have been deleted successfully please upload new ones before leaving this page."
                      );
                    })
                    .then(() => {
                      const deletRef = ref(storage, `photos/${id}`);
                      listAll(deletRef)
                        .then((res) => {
                          res.prefixes.forEach((folderRef) => {});
                          res.items.forEach((itemRef) => {
                            //console.log(itemRef);
                            deleteObject(itemRef)
                              .then(() => {
                                console.log("files deleted successfully");
                              })
                              .catch((error) => {
                                console.log("could not delete");
                              });
                          });
                        })
                        .catch((error) => {
                          // Uh-oh, an error occurred!
                        });
                      //console.log(listRef);
                      // listRef.map((item) => {
                      //   console.log(item.items);
                      // });
                      // deleteObject(listRef)
                      //   .then(() => {
                      //     console.log("files deleted successfully");
                      //   })
                      //   .catch((error) => {
                      //     console.log("could not delete");
                      //   });
                    });
                }}
              >
                Click Here to Delete Current photos
              </button>
            </p>
            <div
              style={{
                marginTop: "50px",
              }}
              className="row"
            >
              <h5>Update Photos</h5>
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
              <div className="col l8 s12  ">
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
                  {images.length > 0 ? (
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
          </div>
        </div>
      </section>
    </>
  );
}

export default PhotoEdit;
