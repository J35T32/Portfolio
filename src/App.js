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
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 8,
                color: {
                  value: {r: 116, g:163, b:44},
                }
              }
            },
            move: {
              speed: 4,
              random: true,
              bounce: true,
              attract: {
                enable: true,
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
