// General Imports
import React, {useState} from 'react';
// Components
import Slider from './components/Slider';
// Data Import
import data from './data';

// style
import './Styles/App.css';
function App() {
  // Use States
const [images] = useState(data());
// MIDDLE IMAGE
const [currentImg, setCurrentImg] = useState(images[Math.round(images.length / 2)]);

  return (
    <div className="App">
     <Slider
     currentImg={currentImg} 
     setCurrentImg={setCurrentImg}
     images={images}
     />
    </div>
  );
}

export default App;
