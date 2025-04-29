import React, { useContext, useEffect, useState } from 'react';
import Modalform from './components/Modalform';
import {Showdata} from './components/store/Showdata';
import Blogstr from './components/Blogstr';
import BlogField from './components/BlogField';

const App = () => {

  console.log(useContext(Showdata));
  
  const [impddata,setimpdata] = useState([])
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState(null);
  const { open ,onopen } = useContext(Showdata);
 

  function handleDelete(i) {
    setimpdata((prev) => {
      let updated = [...prev];
      updated.splice(i, 1);
      return updated;  
    });
  }
  
function handleedit(i){
 setEditIndex(i)
 setEditData(impddata[i])
 onopen()
}


const getData = (data) => {
  if (editIndex !== null) {
    let updatedata = [...impddata];
    updatedata[editIndex] = data;
    setimpdata(updatedata);
    localStorage.setItem("userdata", JSON.stringify(updatedata)); // ✅ Save full array
    setEditIndex(null);
    setEditData(null);
  } else {
    const newData = [...impddata, data];
    setimpdata(newData);
    localStorage.setItem("userdata", JSON.stringify(newData)); // ✅ Save full array
  }
};


useEffect(() => {
  const stored = localStorage.getItem("userdata");
  if (stored) {
    setimpdata(JSON.parse(stored));  
  }
}, []);
  return (
    <>
      {open && <Modalform  getData={getData}    editData={editData} />}
      <Blogstr/>
      <BlogField  reciveddata={impddata}  handleedit ={handleedit}  handledel={handleDelete} />
    </>
  );
};

export default App;
