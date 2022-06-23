import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Create from "./components/Create";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [a, b] = useState([]);
  const addNote = (n) => {
    b((prevdata) => {
      return [...prevdata, n];
    });
  };

  const deleteNote = (index) => {
    // Delete the note from the array using the index
    b((prevdata) => {
      return prevdata.filter((_, i) => {
        return i !== index;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <Create passnote={addNote} />
      {a.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteNote={deleteNote}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
