import './App.css';
import Home from './component/home/home.page';
import { Routes, Route } from 'react-router-dom';
import Result from './component/result/result.page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
