
import PointsTable from './PointsTable';
import './App.css';
import { AdminPage } from './AdminPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/mudra'>
        <Routes>
        <Route path="/" element={<PointsTable/>} />
        <Route path="/admin" element={<AdminPage/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
