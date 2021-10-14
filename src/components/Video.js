import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import React from 'react';
import { NavLink } from "react-router-dom";
import "./Video.scss";
const Video = () => {
  // Nz5CnNHnpO8
  // ?rel=0&showinfo=0&vq=720;autoplay=1
  //let { id } = useParams();
  let id = "-WNgoqBGw4Y";

    return (
        <>

   
        <div className='video'>
            <NavLink to='/' className='btn'>
                <div className='returnIcon'>
                <KeyboardBackspaceIcon />
                return
                </div>
            </NavLink>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="video"
                frameBorder="0"
                allowFullScreen>
        </iframe>
        </div>
        </>
    )
}

export default Video
