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

    // state variable useState({...query})

    const [minBedroom, setMinBedroom] = React.useState('')
    const [minBathroom, setMinBathroom] = React.useState('')
    const [maxPrice, setMaxPrice] = React.useState('')
    const [homeType, setHomeType] = React.useState('')
    const bedNums = [1,2,3,4,5,6]
    const bathNums = [1,2,3]
    const priceNums = [500, 1000, 1500, 2000, 10000]
    const homeTypes = ['Detached', 'Apartment','Semi-Detached']
    const [propCount, setPropCount] = React.useState(0)

    


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
        }, []
    )

    React.useEffect(
        ()=>{
            const query={
                city_id: cityId,
                bedroom_count:minBedroom,
                bathroom_count:minBathroom,
                rent:maxPrice,
                property_type:homeType
              }
              console.log('its running')
              axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
              .then(res=>{
                  console.log(res.data.response)
                  setProperties(res.data.response)
                  setPropCount(res.data.count)
              })
              .catch(err=>console.log(err))
        },[minBedroom, minBathroom, maxPrice, homeType]
    )




    return (
        <div className="city-details-container">
            <Slider headLiner="Search Accomodation" textLiner="Whatever you’re after, we can help you find the right student accommodation for you." />

            <div className="select-containers">
                <div className="select-options">
                    <div className="option">
                        <h4>Min Bedroom</h4>
                        <select onChange={(e) => setMinBedroom(e.target.value)}>
                            <option value="disable selected">Any bedroom</option>
                            {bedNums.map((num) => <option key={num} value={num}>{num}</option>)}
                        </select>
                    </div>

                    <div className="option">
                        <h4>Min Bathroom</h4>
                    <select onChange={(e) => setMinBathroom(e.target.value)}>
                        <option value="disable selected">Any bathroom</option>
                        {bathNums.map((num) => <option key={num} value={num}>{num}</option>)}
                    </select>
                    </div>

                    <div className="option">
                        <h4>Max Price</h4>
                    <select onChange={(e) => setMaxPrice(e.target.value)}>
                        <option value="disable selected">Any price</option>
                        {priceNums.map((num) => <option key={num} value={num}>{num === 10000 ? "3000 +" : num}</option>)}
                    </select>
                    </div>

                    <div className="option">
                        <h4>Home Type</h4>
                    <select onChange={(e) => setHomeType(e.target.value)}>
                        <option value="disable selected">Any Type</option>
                        {homeTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <h1>{propCount} Properies in {cityDetails.city_name}</h1>


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








