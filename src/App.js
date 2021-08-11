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
              "value": 120,
              "density": {
                "enable": false,
                "value_area": 900,
              },
            },
            "size": {
              "value": 1 
            },
            "line_linked": {
              "enable": false,
              "opacity": .075,
              // "distance": 200 
            },
            "shape": {
              "type": "circle",
              "image": {
                "src": "/images/bullseye3.png"
              },
              "stroke": {
                "width": 4,
                "color": {
                  "value": {r: 116, g:163, b:44},
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
                "mode": "push"
              },
            },
            "modes": {
              "repulse": {
                "distance": 200
              },
              "grab": {
                "line_linked": {
                  "distance": 1000
                },
              },  
              "bubble": {
                "size": 8,
                "opacity": .4                 
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
