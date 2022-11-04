import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardAdmin from './components/Admin/DashboardAdmin';
import HomeContainer from './components/Home/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' exact='true' element={<HomeContainer />}></Route>
          <Route path='/admin' element={<DashboardAdmin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
