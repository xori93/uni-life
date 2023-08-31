import React from 'react'
import "./PropertyCard.css"
import { BiPound } from 'react-icons/bi'
import { MdOutlineBathtub } from 'react-icons/md'
import { LuBedDouble } from 'react-icons/lu'
import { IoLocationOutline } from 'react-icons/io5'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


// BsCurrencyPound
// MdOutlineBathtub
// LuBedDouble
// IoLocationOutline
// BsFillHouseDoorFill

function PropertyCard({ property }) {
    return (
        <div className="property-container">
            <img className="property-image" src={property.images[0]} />
            <div className="blue">
                <div className="property-info">
                    <p><BiPound />{property.rent}</p>
                    <p>pppw including bills</p>
                </div>

                <div className="property-rooms">
                    <p><MdOutlineBathtub />{property.bathroom_count}</p>
                    <p><LuBedDouble />{property.bedroom_count}</p>

                </div>
            </div>

            <div className="property-stuff">
                <div className="property-type">
                    <p>{property.property_type}</p>
                    <p>{property.furnished}</p>
                </div>

                <div className="property-address">
                    <IoLocationOutline />
                    <p>{property.address.city}</p>
                    <p>{property.address.postcode}</p>
                    <p>{property.address.street}</p>
                </div>
            </div>

            <div className="view-button">
                < BsFillHouseDoorFill />
                <Link className="view-homes" to={`/homedetails/${property?._id}`}><p>View Homes</p> </Link>
            </div>
        </div>
    )
}

export default PropertyCard