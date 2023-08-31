import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import AllCities from './Pages/AllCities/AllCities'
import CityDetails from './Pages/CityDetails/CityDetails'
import HomeDetails from './Pages/HomeDetails/HomeDetails'





function App() {
  

  return (
    <BrowserRouter>
      <Header />
      
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='allcities' element={<AllCities />} />
          <Route path='/details/:cityId' element={<CityDetails />} />
          <Route path='/homedetails/:propertyId' element={<HomeDetails />} />

        </Routes>

        <Footer />
      </BrowserRouter>
  )
}

export default App
