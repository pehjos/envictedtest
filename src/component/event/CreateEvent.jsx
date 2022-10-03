import React from 'react'
import './createEvent.css'
import {useNavigate} from 'react-router-dom'
import { useState, useRef } from "react";
import { useStateValue } from "../../stateprovider";
import {ImArrowRight2,ImImage} from 'react-icons/im'
import cake from '../landingPage/cake.png'
function CreateEvent() {
    // state data
    const [{basket},dispatch]=useStateValue();
    const [image,setImage]=useState()
    const history=useNavigate()
    const [state ,setState]=useState(true)
const [eventData, seteventData] = useState({
name: "",
host: "",
start_time: "",
end_time: "",
start_date: "",
location: "",

});

// select image
const choseImg=()=>{
    document.getElementById('btnImg').click()
    setState(false)
    
    
    }

// clear image input
const handleEmtyInput=({target})=>{
    const files=target.files
    target.value=''
    }

// image preview

const uploadPrev=()=>{

    const oFreader=new  FileReader()
    oFreader.readAsDataURL(document.getElementById('btnImg').files[0]);
    oFreader.onload=function(oFREvent){
    document.getElementById("prev").src=oFREvent.target.result;
    console.log(oFREvent.target.result)
    seteventData({...eventData, image:oFREvent.target.result})
    setState(false)
    setImage(oFREvent.target.result)
}
    }

const Next=(e)=>{
    e.preventDefault()
    history("/event")
    dispatch({
    type:'ADD_TO_BASKET',
 item:{
   ...eventData,
   image
    }
    })
}
console.log(basket)
return (
<div className='event'>
    <p onClick={() => history(-1)}>cancel</p>
<h3>📍 Create Event </h3>     
<div className='eventContent'>
<div className='eventForm'>
<form >
<div className="addPhoto">
{!state?(<img  accept="image/*" id="prev"/>):(
<img src={cake}/>

)}

<ImImage label="Add Photo"id="photo"  onClick={choseImg}/>
</div>
<input required  type="text" placeholder='event name 📌'value={eventData.name}
onChange={(e)=>seteventData({...eventData, name:e.target.value})}/>
<input required  type="text" placeholder='host name 🧑'value={eventData.host}
onChange={(e)=>seteventData({...eventData, host:e.target.value})}/>
<label>when is it starting 📅</label>
<input required  type="datetime-local" placeholder='date'value={eventData.date}
onChange={(e)=>seteventData({...eventData, date:e.target.value})}/>
<label>when is it ending ⌚</label>
<input required  type="datetime-local" placeholder='end date'value={eventData.end_time}
onChange={(e)=>seteventData({...eventData,   end_time:e.target.value})}/>
<input required   type="text" placeholder='location 🗺️'value={eventData.location}
onChange={(e)=>seteventData({...eventData, location:e.target.value})}/>
<input required accept="image/*"  type="file" id="btnImg"  
onClick={handleEmtyInput}
onChange={ uploadPrev}/>
<button  onClick={Next} >NEXT<ImArrowRight2/></button>

</form>

</div>

</div>

</div>
)
}

export default CreateEvent