import React, { useContext } from 'react';
import Modalform from './components/Modalform';
import {Showdata} from './components/store/Showdata';
import Blogstr from './components/Blogstr';

const App = () => {
  const { open } = useContext(Showdata);
console.log( useContext(Showdata));

  return (
    <>
      {open && <Modalform />}
      <Blogstr/>
    </>
  );
};

export default App;
