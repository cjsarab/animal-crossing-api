import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from '.././components/ui/NavBar';
import FishContainer from './FishContainer';

const AllDataContainer = () => {



  return (
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/fish" element={<FishContainer />} />
        </Routes>
    </Router>
    </>
  );
};


export default AllDataContainer;