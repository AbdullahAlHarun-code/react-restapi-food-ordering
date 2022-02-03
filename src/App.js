import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Pages/About';
import Contactus from './Pages/Contactus';
import Menu from './Pages/Menu';



function App() {
  return (
    <div className="App">
      <BrowserRouter>                                
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contactus />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route exact path="/menu/:slug" element={<Menu />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
