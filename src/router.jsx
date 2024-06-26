import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import MotorComponent from './components/motor'
import CaravanComponent from './components/caravan'

import UsedCarComp from './components/usedCar'
import CampingComp from './components/campingPlace'
import Navbar from './components/navbar'
import HomeComponent from './components/home'
import TuningComponents from './components/tuning/tuning'

import DetailsPage from './components/motor/DetailPage'
import DetailsCaravan from './components/caravan/detail'

import DetailTuning from './components/tuning/tuningdetail'


const RouterComponent = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/motor' element={<MotorComponent />} />
        <Route path='/caravan' element={<CaravanComponent />} />
        <Route path='/tuning' element={<TuningComponents />} />
        <Route path='/used-car' element={<UsedCarComp />} />
        <Route path='/camping-place' element={<CampingComp />} />
        <Route path='/motor/:id' element={<DetailsPage  />} />
        <Route path='/caravan/:id' element={<DetailsCaravan  />} />
        <Route path='/tuning/:id' element={<DetailTuning  />} />
      </Routes>
    </>
  )
}

export default RouterComponent
