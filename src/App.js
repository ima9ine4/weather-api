//App.js
import { Route, Routes } from 'react-router-dom';
import Weather from './Weather';
import Cities from './Cities';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Weather />} />
      <Route path="/Seoul" element={<Cities />} />
      <Route path="/Ulchin" element={<Cities />} />
      <Route path="/Mokpo" element={<Cities />} />
      <Route path="/Busan" element={<Cities />} />
      <Route path="/Jeju" element={<Cities />} />
      <Route path="/Daejeon" element={<Cities />} />
      <Route path="/Daegu" element={<Cities />} />
      <Route path="/Gwangju" element={<Cities />} />
    </Routes>
  );
};

export default App;