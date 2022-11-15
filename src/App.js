import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ResponsiveAppBar from './Components/NavBar';

function App() {
  return (
    <div >
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
