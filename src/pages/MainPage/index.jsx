import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from '../../api/axios'
import { getVideoInfo } from '../../helpers/fetchingData';
import VideoCard from '../../components/VideoCard';
import { SidebarContext } from '../../context/SidebarContext';

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos, setMainVideos] = useState(storedVideos || []);
  const {isToggled, setIsToggled} = useContext(SidebarContext);

  useEffect(() => {
    setIsToggled(true);
  },[])

  const getMainVideos = useCallback(async() => {
    try {
      if(!storedVideos){
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`);
      let videosArray = response.data.items;
      videosArray = await getVideoInfo(videosArray);
      setMainVideos(videosArray);
      // console.log(videosArray);
      localStorage.setItem('mainVideos', JSON.stringify(videosArray))
      }
      // console.log(mainVideos)
    } catch (error) {
      console.log(error)
    }
  },[])

  useEffect(() => {
    getMainVideos()
  }, [getMainVideos])

  return (
    <section className='mainGallery'>
      {mainVideos.map(video => {
        return <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={video.extraInfo}
          channelInfo={video.channelInfo} />
        
      })}
    </section>
  )
}

export default MainPage