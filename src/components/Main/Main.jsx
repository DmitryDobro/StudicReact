'use client'
import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './Main.scss';
// import Univers from './Univers/Univers.jsx';
// import Lead from './Lead/Lead.jsx';
// import Region from './Region/Region.jsx';

import {api} from '../../utils/Api.js';

function Main({cities}) {


  return (
    <main className="main">
      <div>Main</div>
      {/* <Routes>
        <Route path="/" element={<Lead />} />
        <Route path="/univers/:id" element={<Univers />} />
        <Route path="/region/:Regionid" element={<Region cities={cities} />} />
      </Routes> */}
    </main>
  );
}
export default Main;
