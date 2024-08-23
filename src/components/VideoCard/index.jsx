import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import formatViews from '../../helpers/formatViews';
import formatTimeVideo from '../../helpers/formatTimeVideo';


const VideoCard = ({id, video, img, info, eInfo, channelInfo}) => {
  //영상이 생성된 시간을 상대적인 시간(ex 몇분전..)으로 전환시켜주기 위한 코드
  dayjs.extend(relativeTime);
  const time = dayjs(info.publishedAt).fromNow(true);
  //
  const views = formatViews(eInfo.viewCount);
  const duration = formatTimeVideo(eInfo.duration);
  return (
    <div className='videoCard'>
      <Link to={`/video/${id}`} state={{...video}}>
        <div className='video_preview'>
          <img src={img} alt={info.title} />
          {
            eInfo.duration 
            ?
            <div className='video_duration'>
              <span>{duration}</span>
            </div>
            : null 
          }
        </div>
        <div style={{display:'flex'}}>
        <div className='video_info_container'>
          <div className='avatar_container'>
            <img src={img} alt={`${info.channelTitle} avatar`} className='avatar'/>
          </div>
        </div>
        <div className='video_text_container' style={{flexGrow:'1'} }>
          <h3>
            {info.title.length > 60 ? (info.title.substring(0, 60)) : info.title}
          </h3>
          <div className='video_info'>
            <Link to={`/channel/${channelInfo.customUrl}`}>
              <div className='channelName'>
                {info.channelTitle}
              </div>
            </Link>
            <div className='video_metadata'>
              <span>{views}</span> &nbsp;
              <span className="dot_separator"> &#8226;</span> &nbsp;
              <span> {time} ago</span>
            </div>
            
          </div>
          
        </div>
        <div className='dots_container'>
              <BiDotsVerticalRounded size={25} className='dots'/>
          </div>
        </div>
        
      </Link>

    </div>
  )
}

export default VideoCard