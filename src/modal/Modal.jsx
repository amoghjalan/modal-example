import React, { useState } from "react";
import './modal.css'
const Modal = ({ setIsOpen, givenText, setText }) => {
  const [text, updateText] = useState(givenText);
  const handleUpdate = () => {
    setText(text);
    setIsOpen(false);
  }
  return (
    <>
      <div className='darkBG' onClick={() => setIsOpen(false)} />
      <div className='centered'>
        <div className='modal'>
          <div className='modalHeader'>
            <h5 className='heading'>Enter Text</h5>
          </div>
          <div className='modalContent'>
            <input className="modalInput" type='text' value={text} onChange={(e) => updateText(e.target.value)}/>
          </div>
          <div className='modalActions'>
            <div className='actionsContainer'>
              <button className='addBtn' onClick={handleUpdate}>
                Update
              </button>
              <button
                className='cancelBtn'
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal