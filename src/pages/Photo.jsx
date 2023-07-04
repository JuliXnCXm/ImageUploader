import {React, useEffect, useState} from 'react'
import checkIcon from '../assets/checkIcon.png'
import axios from 'axios';
import '../styles/Photo.css'
import { server } from '../context/Api';
import { useParams } from 'react-router-dom';


const Photo = () => {
    const [image,setImage] = useState('');
    const [loading,setLoading] = useState(true);
    const [showTooltip, setShowTooltip] = useState(false)

    let {id} = useParams();
    useEffect(() => {
        console.log("iniciando fetch")
        setLoading(true)
        axios.get(`${server}/user/photo/upload/${id}`).then(res => {
            setImage(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[id])

    setTimeout(() => {
        setLoading(false)
    },1000)

    const handleClick = () => {
        setShowTooltip(true)
        navigator.clipboard.writeText(`${server}/user/photo/image/${id}`);
        setTimeout(() => {
            setShowTooltip(false)
        }, 4000)
    }

    return(loading ? <div className="loading">
            loading
        </div> : (
        <div>
            <div className = 'photoUploadedContainer'>
                <img src = {checkIcon} alt = "" />
                <h2>Uploaded Successfully!</h2>
                <div className='uploadContainer'>
                    <img
                            src={`${server}/user/photo/image/${id}`}
                    alt="" />
                </div>
                <div className='copyLinkContainer'>
                    <div className='textContainer'>
                            <input defaultValue={`${server}/user/photo/image/${id}`}/>
                        {showTooltip && 
                            <div className='Tooltip'>
                                <span>!Copied</span>
                            </div>
                        }
                        <button className="copyLinkButton" onClick={handleClick}
                            >Copy Link</button>
                    </div>
                </div>
            </div >
        </div >
        )
    )
}

export default Photo
