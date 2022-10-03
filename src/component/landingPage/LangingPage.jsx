import React from 'react'
import './landingpage.css'
import {Link} from 'react-router-dom'
function LangingPage() {
return (
<div className='landingPage'>
<div className='headingText'>
<div className='heading'>
<h3 className='snapchat'>Snapchat</h3>
<h3 className='hadevent'>Imagine if <br/>had events.</h3> 
 

</div>

<div className='paragraphText'>
<p>Easily host and share events with your friends across any social media.</p>  
</div> 
</div>
<div className='image'></div> 
<Link to="/create" >
<div className='button'>
 <p>🎉 Create my event</p>   
    </div>  
    </Link>
</div>
)
}

export default LangingPage