import { Routes, Route } from 'react-router-dom';
import Converter from './pages/Converter';
import Current from './pages/Current';


function App() {
  return (
    <div className="container">
<Routes>
  <Route path="/" element={<Converter/>}></Route>
  <Route path="/current" element={<Current/>}></Route>
</Routes>
    </div>
  );
}

export default App;
