import React, { useContext, useState } from 'react';
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


const getData =(data)=>{
  console.log(data);
  if(editIndex !==null){
let updatedata = [...impddata]
 updatedata[editIndex] = data;
 setimpdata(updatedata);
 setEditIndex(null)
 setEditData(null)
 
 
  }else{
    setimpdata((pre)=>[...pre, data])
  }
 
}

  return (
    <>
      {open && <Modalform  getData={getData}    editData={editData} />}
      <Blogstr/>
      <BlogField  reciveddata={impddata}  handleedit ={handleedit}  handledel={handleDelete} />
    </>
  );
};

export default App;
