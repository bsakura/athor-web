import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './pages/layout';
import { Home } from './pages';
import { NotFound } from './pages/notFound';
import { OperationBusiness } from './pages/operationalBusiness';
import { InvestmentManagement } from './pages/investmentManagement';

import AOS from "aos";
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='operational-business' element={<OperationBusiness />} />
        <Route path='investment-management' element={<InvestmentManagement />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
