import React from 'react'
import './eventDetails.css'
import {ImCalendar,ImLocation} from 'react-icons/im'
import {AiOutlineRight} from 'react-icons/ai'
import Moment from 'react-moment';
import image from '../landingPage/cake.png'
import { useStateValue } from "../../stateprovider";
import {useNavigate} from 'react-router-dom'
function EventDetails() {
  const [{basket},dispatch]=useStateValue();
console.log(basket,"data")
const navigate=useNavigate()
const toUpperCaseFilter = (d) => {
  return d.toUpperCase();
}
  return (
    <div className='events'>
  
   <img src={basket.image}/>
   <h4 className='eventname'>{basket.name}</h4>
    <p className='hostedname'>Hosted by {basket.host}</p>
   <div className='dateInfo'>
<div className="icon"><ImCalendar className='fill'/></div>
<div className='text'>
<div className="from">
<Moment filter={toUpperCaseFilter}>
{basket.date}
</Moment>
</div>
<div className="to">
to <Moment filter={toUpperCaseFilter}>{basket.end_time}</Moment>
</div>
</div>
<AiOutlineRight/>
   </div>
   <div className='streetInfo'>
<div className="icon"><ImLocation className='fill'/></div>
<div className='text'>
<div className="from">
Street name
</div>
<div className="to">
{basket.location}
</div>
</div>
<AiOutlineRight/>
   </div>
   <h6  onClick={() => navigate(-1)}>Edit Details</h6> 
    </div>
  )
}

export default EventDetails