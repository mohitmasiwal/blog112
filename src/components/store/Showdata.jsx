import React, { useState } from 'react';

 
export const Showdata = React.createContext();

const Showdataprovider = ({ children }) => {
  const [open, setopen] = useState(false); 

  function onclose(){
    setopen(false);
  }
   
  const onopen = () => {
    console.log("clicked");
    setopen(true);}

   
  const blogdata = {
    open , 
    onclose ,
    onopen  
  };

  return (
    <Showdata.Provider value={blogdata}>
      {children}
    </Showdata.Provider>
  );
};

export default Showdataprovider;
