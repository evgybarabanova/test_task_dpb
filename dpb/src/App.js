import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="container">
<Routes>
  
  <Route path="/" element={<Landing/>}></Route>
</Routes>
    </div>
  );
}

export default App;
