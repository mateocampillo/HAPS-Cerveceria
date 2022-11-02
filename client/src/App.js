import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContainer from './components/MainContainer';
import CervezasContainer from './components/CervezasContainer';
import DashboardAdmin from './components/Admin/DashboardAdmin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact='true' element={<MainContainer />}></Route>
          <Route path='/cervezas' element={<CervezasContainer />}></Route>
          <Route path='/admin' element={<DashboardAdmin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
