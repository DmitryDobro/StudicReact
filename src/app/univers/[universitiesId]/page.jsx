'use client';
import {useState, useEffect} from 'react';
import Banner from '../../../components/Main/Univers/Banner/Banner';
import Aside from '../../../components/Main/Univers/Aside/Aside';
import MainInformation from '../../../components/Main/Univers/MainInformation/MainInformation';
import Specialization from '../../../components/Main/Univers/Specialization/Specialization';
import AboutUnivers from '../../../components/Main/Univers/AboutUnivers/AboutUnivers';
import './Univers.scss';

import {api} from '../../../utils/Api';
export default function University({params: {universitiesId}}) {
  const university = JSON.parse(localStorage.getItem('university'));
  
  return (
    <>
 
      <Banner university={university} />
      <section className="main__body container">
        <Aside />
        <div className="main__content">
          <MainInformation />

          <AboutUnivers />
        </div>
      </section>
    </>
  );
}
