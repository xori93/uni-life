import React,{useEffect, useState} from 'react'
import "./AllCities.css"
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import {Link} from 'react-router-dom'


function AllCities() {

  const [allCities, setAllCities] = useState([])

  useEffect(
    () => {
        // make api call to find out number of cities
        axios.get(`https://unilife-server.herokuapp.com/cities?limit=24`)
          .then(res => {
            // console.log(res.data.response)
            
            // store this in state
            setAllCities(res.data.response)
          })
          .catch(err => console.log(err))
  
      }, []
        
      )


    

  return (
    <div className="allCities-container">
        <Slider banner="Student Accomodation" bannerText="UniLife have student accommodation available across the UK.
             Whatever you’re after, we can help you find the right student accommodation for you. "/>
      <h1>Search by City</h1>
    <div className="allcities">
         {
             allCities.map( (item,index) => 
             <Link to={`/details/${item._id}`}> 
             <button className="allcities-button" key={index.id}>{item.name}</button>
              </Link>)
          }
          
          </div>
    </div>
  )
}

export default AllCities