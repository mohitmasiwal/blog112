import React, { useContext, useRef } from 'react';
import ReactDOM from 'react-dom';
import{ Showdata} from './store/Showdata';  

const Modalform = () => {

  const urlimp = useRef()
  const titalimp = useRef()
  const disimp = useRef()
  const {onclose} = useContext(Showdata);  

  return (
    ReactDOM.createPortal(

      <div>
        <label ref={urlimp } htmlFor="image url">Image URL</label>
        <input type="text" />
        
        <label ref={titalimp} htmlFor="Title">Title</label>
        <input type="text" />
        
        <label ref={disimp} htmlFor="Description">Description</label>
        <input type="text" />

        <button>Post</button>
        <button onClick={()=>onclose()}>Close</button>
      </div>,
      document.getElementById('modal_root')  
    )
  );
};

export default Modalform;
