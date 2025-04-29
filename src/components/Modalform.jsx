import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Showdata } from './store/Showdata';

const Modalform = ({ editData, getData }) => {
  const urlimp = useRef();
  const titalimp = useRef();
  const disimp = useRef();
  const { onclose } = useContext(Showdata);

  function sentdata() {
    const alldata = {
      imageUrl: urlimp.current.value,
      title: titalimp.current.value,
      description: disimp.current.value,
    };
    getData(alldata);
    onclose();
  }

  useEffect(() => {
    if (editData) {
      urlimp.current.value = editData.imageUrl;
      titalimp.current.value = editData.title;
      disimp.current.value = editData.description;
    } else {
      urlimp.current.value = '';
      titalimp.current.value = '';
      disimp.current.value = '';
    }
  }, [editData]);

  return ReactDOM.createPortal(
    <div className=" border border-red-400 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 w-full  border border-red-400  max-w-md">
        <h2 className="text-lg font-bold mb-3 text-center">Add New Blog</h2>

        <label className="block mb-1">Image URL</label>
        <input
          type="text"
          ref={urlimp}
          className="w-full mb-3 p-2 border"
        />
 
        <label className="block mb-1">Title</label>
        <input
          type="text"
          ref={titalimp}
          className="w-full mb-3 p-2 border"
        />

        <label className="block mb-1">Description</label>
        <input
          type="text"
          ref={disimp}
          className="w-full mb-4 p-2 border"
        />

        <div className="flex justify-end gap-2">
          <button
            onClick={sentdata}
            className="px-3 py-1 bg-blue-500 text-white"
          >
            Post
          </button>
          <button
            onClick={onclose}
            className="px-3 py-1 bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal_root')
  );
};

export default Modalform;
