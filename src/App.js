import {
  Route, BrowserRouter, Routes, Navigate,
} from 'react-router-dom';
import { Calculator } from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuoteFetch from './components/QuoteFetch';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<QuoteFetch />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
