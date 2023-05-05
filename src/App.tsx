import React, { useEffect, useState } from 'react';
import { getCats } from './services';
import Appbar from './components/Appbar/Appbar';
import Gallery from './components/Gallery/Gallery';
import { ICats } from './models';
import './App.css';

function App() {
  const [cats, setCats] = useState<ICats>([]);


  useEffect(() => {
    retrieveCats();
  }, []);

  function retrieveCats() {
    getCats<ICats>(5)
      .then((data) => setCats(data))
    console.log(cats)
  }

  return (
    <div className="App">
      <Appbar />
      {/* <Gallery {...cats} /> */}
    </div>
  );
}

export default App;
