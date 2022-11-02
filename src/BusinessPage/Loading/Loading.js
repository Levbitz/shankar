import React from "react";
//import MyGif from "../../lib/images/loader.gif";

function Loading() {
  return (
    <div
      style={{
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <h4
        style={{
          color: "#fff",
          margin: 0,
          padding: 0,
        }}
        className="center"
      >
        Smart Dealer welcomes you
      </h4>
      <p className="center">Buy and sell New and used Cars on Smart Dealer</p>
      {/*<p children="center">
        <img width={200} src={MyGif} alt="" />
      </p>*/}
      <h6
        style={{
          margin: 0,
          padding: 0,
        }}
        className="white-text"
      >
        loading.....
      </h6>
    </div>
  );
}

export default Loading;
