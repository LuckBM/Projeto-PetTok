import React, {useState } from 'react'
import "./VideoSideBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PetsIcon from '@mui/icons-material/Pets';
import SmsIcon from '@mui/icons-material/Sms';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar({likes, messages, shares}){
   
   const [liked, setliked] = useState(false)

    function handdleLike(){
        setliked(!liked)

    }
    
    return(
        <div className='videoSideBar'>

        <div 
        className='videoSiderBar__options'
        onClick={handdleLike}
        > 
             { liked ? <PetsIcon fontSize='large'/> :  <FavoriteBorderIcon fontSize='large'/>}
        <p>{liked ? likes + 1 : likes}</p>
        </div>

        <div className='videoSiderBar__options'> 
        <SmsIcon fontSize='large'/>
        <p>{ messages }</p>
        </div>

        <div className='videoSiderBar__options'> 
        <ShareIcon fontSize='large'/>
        <p>{ shares }</p>
        </div>
           </div>
    )
}

export default VideoSideBar


