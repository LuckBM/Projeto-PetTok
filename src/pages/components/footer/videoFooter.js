import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter(){
    return(
        <div className='videoFooter'>
            <div className='videoFooter__text'>
            <h3>@Lucas Bento</h3>
            <p>Descrição do Video</p>
                <div className='videoFooter__music'>    
                    <MusicNoteIcon className='videoFooter__icon'/>
                   <div className='videoFooterMusic__text'> <p>Musica</p> </div>
                </div>
            </div>
            
            <img className='videoFooter__record'
                alt='Imagen de um vinil girando'
                src='http://cdn.onlinewebfonts.com/svg/img_143777.png'
            />
        </div>
    )
    
}

export default VideoFooter