import React, { useState } from "react";
import "./App.css";

import Modal from "./modal/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <main>
      {text && (
        <>
          <p>Entered Text:</p>
          <p className="enteredText">{text}</p>
        </>
      )}
      <button className="primaryBtn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <Modal setIsOpen={setIsOpen} givenText={text} setText={setText} />
      )}
    </main>
  );
};

export default App;
