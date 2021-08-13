// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

function App() {
  return (
    <>
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 180,
              "density": {
                "enable": false,
                "value_area": 900,
              },
            },
            "color": {
              "value": "#BA7979",
            },
            // "opacity": {
            //   "value": .5,
            //   "random": true
            // },
            "size": {
              "value": 8,
              "random": true,
            },
            "line_linked": {
              "enable": true,
              "opacity": .1,
              "distance": 30 
            },
            "shape": {
              "type": "circle",
              "image": {
                "src": "/images/bullseye3.png"
              },
              "stroke": {
                "width": 1.5,
                "color": {
                  "value": {r: 148, g:196, b:75}, 
                }
              }
            },
            "move": {
              "enable": true,
              "direction": "none",
              "outMode": "bounce",
              "speed": 1,
              "random": true,
              "bounce": false,
              "attract": {
                "enable": false,
              }
            },       
          },
          "interactivity": {
            "detect_on": "window",
            "events": {
              "onHover": {
                "enable": true,
                "mode": "bubble"
              },
              "onClick": {
                "enable": true,
                "mode": "repulse"
              },
            },
            "modes": {
              "repulse": {
                "distance": 240
              },
              "grab": {
                "line_linked": {
                  "distance": 1000
                },
              },  
              "bubble": {
                "size": 20,
                "opacity": .4,
                // "duration": 1
              },
            }, 
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
