import React, { useEffect, useState } from 'react'
import "./HomeDetails.css"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import HomeImage from '../../components/HomeImage/HomeImage'
import HomeInfo from '../../components/HomeInfo/HomeInfo'
import HomePrice from '../../components/HomePrice/HomePrice'
import { BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IoChevronBack } from 'react-icons/io5'

// BiCheck
// IoChevronBack


function HomeDetails() {

    const { propertyId } = useParams()

    const [homeDetails, setHomeDetails] = useState([])
    const [homeImages, setHomeImages] = useState([])
    const [homePrices, setHomePrices] = useState("")

    useEffect(
        () => {
            axios.get(`https://unilife-server.herokuapp.com/properties/${propertyId}`)
                .then(res => {
                    console.log(res.data)
                    // store data in state
                    setHomeDetails(res.data)
                    setHomeImages(res.data.images)
                    setHomePrices(res.data.bedroom_prices)
                    console.log(res.data.bedroom_prices.bedroom_one)
                })
                .catch(err => console.log(err))
        }, []
    )


    return (
        <div className="home-container">
            <div className="back-icon">
                <IoChevronBack />
                <Link className="search" to={`/details/${homeDetails?.city_id?._id}`}><p className="search">Back to Search</p></Link>
            </div>
            <div className="home-top">
                <HomeImage images={homeImages} />
                <HomeInfo property={homeDetails} />
            </div>

            <div className="home-info">
                <div className="description">
                    <h2>Description</h2>
                    <p className="">{homeDetails?.property_description}</p>
                </div>
                {/* <h2>Bedroom Prices</h2> */}
                <HomePrice prices={homePrices} />
            </div>

            <div className="key-features">
                <h2>Key Features</h2>
                {
                    homeDetails?.key_features?.map((item) => <p> <BiCheck className="check-icon" />{item}</p>)
                }
            </div>
        </div>
    )
}

export default HomeDetails