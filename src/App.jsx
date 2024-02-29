
import PointsTable from './PointsTable';
import './App.css';
import { AdminPage } from './AdminPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import PrivateRoutes from '../PrivateRoute';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/mudra'>
        <Routes>
          
          <Route path="/admin" element={<AdminPage/>} />
          
        <Route path="/" element={<PointsTable/>} />
        <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
