import './App.css';
import avatars from './data/avatars.json'
import scenes from './data/scenes.json'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDoorOpen, faVrCardboard } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [selected, setSelected] = useState('');
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div className="app">
      {/* Navbar */}
      <nav class="navbar navbar-dark bg-dark justify-content-center">
        <a class="navbar-brand ">HIO</a>
      </nav>
      {/* Rows*/}
      <nav className="navbar navbar-dark bg-darkgray btn-nav" >
        <span class="badge badge-primary ">Avatar</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row column_container w-100">
            {avatars.map((avatar, index) => (
              <div onClick={()=>{setSelected(avatar.name)}} className="col">
                <div className={(selected===avatar.name)?`avatar selected`:`avatar`} >
                  <img src={`${avatar.name}.png`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-darkgray btn-nav" >
        <span class="badge badge-primary ">Maps</span>
      </nav>
      <div className="container">
        <div className="row">
          <div className="row column_container w-100">
            {scenes.map((scene, index) => (
              <div className="col-4">
                {scene.status === "off" ? (
                  <div className="map">
                    <span className='ov-text'>comming soon !</span>
                    <img src={`${scene.img}`} className="overlay" />
                  </div>
                ) : (
                  <div className="map">
                    <img src={`${scene.img}`} />
                  </div>
                )}

              </div>
            ))}


          </div>
        </div>
        <div className="row justify-content-center m-5">
          <button onClick={() => openInNewTab(`https://glacial-chamber-76155.herokuapp.com/?modal=${selected}`)} className="btn btn-primary btn-lg mx-2"><FontAwesomeIcon icon={faDoorOpen} /> Enter</button>
          <button className="btn btn-warning btn-lg mx-2"><FontAwesomeIcon icon={faVrCardboard} /> Join with VR</button>
        </div>
      </div>

    </div>
  );
}

export default App;
