import React, { useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import { SidebarContext } from '../../context/SidebarContext';

const VideoPage = () => {
  //Youtube 동영상을 재생시키는 코드
  const {videoId} = useParams();
  let location = useLocation();
  const {state: currentVideo} = location;

  const {setIsToggled} = useContext(SidebarContext);

  useEffect(() => {
    setIsToggled(false);
  },[])

  const onPlayerReady = (e) => {
    e.target.playVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars:{
      autoplay: 1
    }

  }

  return (
    <div>
      <YouTube className='youtube-player' videoId={videoId} onPlay={onPlayerReady} opts={opts}/>
    </div>
  )
}

export default VideoPage