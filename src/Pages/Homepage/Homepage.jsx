import React, {useEffect, useState} from 'react'
import "./Homepage.css"
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import CityCards from '../../components/CityCards/CityCards'
import Compare from '../../components/Compare/Compare'
import Selection from '../../components/Selection/Selection'
import {Link} from 'react-router-dom'
import AllCities from '../AllCities/AllCities'




function Homepage() {
  
    // I need to create the user interface 
    // that means I need to find out how many cities there are when the page loads

    const [cities, setCities] = useState([])
    const [cityId, setCityId] = useState('')

    //  when I select a city, I want to see the information in that city
    // https://unilife-server.herokuapp.com/cities?limit=20
    useEffect(
        () => {
            // make api call to find out number of cities
            axios.get(`https://unilife-server.herokuapp.com/cities?limit=20`)
              .then(res => {
                // console.log(res.data.response)
                
                // store this in state
                setCities(res.data.response)
              })
              .catch(err => console.log(err))
      
          }, []
            
          )

          const handleSelect = (e)=>{
            console.log('select', e.target.value)
            // which city was selected?
            setCityId(e.target.value)
            // check in components if my state works
          }
 

  return (
    <div className="homepage-container">
      <Slider headLine="Find student homes with bills included" textLine="A simple and faster way to search for students accomodation"/>
      

      <div className="select-container">
        <select onChange={handleSelect} required className="select-option"> 
            <option value="disable selected">Search by cities...</option>
            {
                cities.map(item => 
                <option value={item._id} key={item._id}>{item.name}</option>
                )
            }
        </select>
       <Link to={`/details/${cityId}`}><button className="find-home-button">Find Homes</button></Link>
        </div>

        <h1>Students accomodation in our top cities</h1>
        <div className="city-card-container">
          {
             cities.slice(0,9).map(item =><CityCards key={item.id} city={item} />)
          }
        </div>
           
           <Link to="/allcities"><button className="city-button">See All Cities</button></Link>
           <div >
           <h2 className="compare-h">Compare all inclusive student homes</h2>
            <Compare />
           </div>

           <div>
            <Selection />
            <button className="selection-button">Search & Compare</button>
           </div>

           
    
    </div>
    
  )
}

export default Homepage