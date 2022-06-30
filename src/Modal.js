import React from "react";
import reactDom from "react-dom";
import { connect } from "react-redux";
import { deleteStream } from "./actions";

const Modal = ({ stream, setSelectedDelete, deleteStream }) => {
  const onClickDelete = id => {
    deleteStream(id);
    setSelectedDelete(null);
  };
  return reactDom.createPortal(
    <div
      style={{
        top: "0",
        left: "0",
        position: "absolute",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: "2",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h1>delete stream</h1>
        <p>are you sure you wanna delete stream "{stream.name}"?</p>
        <button onClick={() => onClickDelete(stream.id)}>delete</button>
        <button onClick={() => setSelectedDelete(null)}>cancel</button>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default connect(null, { deleteStream })(Modal);
