import React, {useState} from 'react'
import "./CityDetails.css"
import Slider from '../../components/Slider/Slider'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PropertyCard from '../../components/PropertyCard/PropertyCard'
import { BiPound } from 'react-icons/bi'

function CityDetails() {
    

    //  extract cityId from url
    const { cityId } = useParams()
    // console.log(typeof(cityId))

    // create state for upcoming api
    const [cityDetails, setCityDetails] = React.useState('')
    const [properties, setProperties] = React.useState([])
    const [cityInfo, setCityInfo] = useState([])
    // const options = [

    // ]


    React.useEffect(
        () => {
            // call api to get data
            axios.get(`https://unilife-server.herokuapp.com/properties/city/${cityId}`)
                .then(res => {
                    console.log(res.data)

                    setCityDetails(res.data)
                    setProperties(res.data.response)
                    // setCityInfo(res.data.data[0])
                })
                .catch(err => console.log(err))
        }, []
    )

    React.useEffect(
        ()=> {
            axios.get(`https://unilife-server.herokuapp.com/cities/${cityId}`)
            .then((res)=>{
                // console.log(res.data.data)
                // set index to 0 to get info for the city in array
                setCityInfo(res.data.data[0])
            })
            .catch(err=>console.log(err))
        },[]
    )

    return (
        <div className="city-details-container">
            <Slider headLiner="Search Accomodation" textLiner="Whatever you’re after, we can help you find the right student accommodation for you." />

            <div className="select-containers">
                <div className="select-options">
                    <div className="option">
                        <h4>Min Bedroom</h4>
                        <select>
                            <option value="disable selected">Any bedroom</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                       
                        </select>
                    </div>

                    <div className="option">
                        <h4>Min Bathroom</h4>
                    <select>
                        <option value="disable selected">Any bathroom</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>

                    </select>
                    </div>

                    <div className="option">
                        <h4>Max Price</h4>
                    <select>
                        <option value="disable selected">Any price</option>
                        <option>600</option>
                        <option>1500</option>
                        <option>2450</option>
                        <option>900</option>
                        <option>1200</option>


                    </select>
                    </div>

                    <div className="option">
                        <h4>Home Type</h4>
                    <select>
                        <option value="disable selected">any type</option>
                        <option>Detached</option>
                        <option>Semi-Detached</option>
                        <option>Apartment</option>
                
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <h1>{cityDetails.total} Properies in {cityDetails.city_name}</h1>


            </div>

            <div className="property">
                {
                    properties?.map((item) => <PropertyCard property={item} />)

                }
            </div>

            <div className="city-details-bottom-container">
            
            <div className="city-bottom">
            <h3>Being a student in <em>{cityDetails.city_name }</em></h3>   
                <p className="city-details-info">
                    {cityInfo?.student_life}
                </p>
                <p className="city-details-info">
                {cityInfo?.universities}
                </p>
               
                </div>
                <img src="/group.png" className="city-details-image" />
            </div>

        </div>
    )
}

export default CityDetails








