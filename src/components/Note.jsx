import React from "react";
function Note({ deleteNote, index, title, content }) {
  return (
    <div className="note">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "red",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "gray",
          position: "absolute",
        }}
        onClick={() => deleteNote(index)}
      >
        X
      </div>
      <h3 >{title}</h3>
      <br />
      <p style={{
          wordBreak: "break-all"
      }}>{content} </p>
    </div>
  );
}
export default Note;
