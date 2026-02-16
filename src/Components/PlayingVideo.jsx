import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../Utills/rapidapi'

const PlayingVideo = () => {
const [video, setVideo] = useState()
const [realtedVideo, setRelatedVideo] = useState()
const {id}=useParams();

useEffect(()=>{
  fetchVideoDetails()

},[id])

const fetchVideoDetails=()=>{
  fetchData(`video/details/?id=${id}`).then((res)=>{
    setVideo(res)
  })
}

  return (
    <div className=''>

    </div>
  )
}

export default PlayingVideo
