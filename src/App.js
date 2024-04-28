import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Yes from './components/yes';
import RootLayout from './components/RootLayout';

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/valentine" element={<Home />} />
          <Route path="/valentine/yes" element={<Yes />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
