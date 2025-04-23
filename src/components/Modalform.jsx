import React, { useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Showdata } from './store/Showdata';

const Modalform = ({ editData ,getData }) => {
  const urlimp = useRef();
  const titalimp = useRef();
  const disimp = useRef();
  const { onclose, } = useContext(Showdata);

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Blog</h2>

        <label className="block mb-1 font-medium">Image URL</label>
        <input
          type="text"
          ref={urlimp}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block mb-1 font-medium">Title</label>
        <input
          type="text"
          ref={titalimp}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        <label className="block mb-1 font-medium">Description</label>
        <input
          type="text"
          ref={disimp}
          className="w-full mb-6 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={sentdata}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Post
          </button>
          <button
            onClick={onclose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
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
