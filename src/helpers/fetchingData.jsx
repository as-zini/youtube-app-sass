//MainPage에서 받아온 영화들의 상세정보를 받아오기 위한 함수를 만드는 파일
import axios from '../api/axios'

export const getVideoInfo = async(videosArr) => {
  try {
    for (let video of videosArr){
      const videoResponse = await axios.get(`/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${video.id.videoId}`)

      Object.assign(video.snippet, {...videoResponse.data.items[0].snippet})
      //원래의 데이터 배열에 새로운 정보 추가하는 부분
      video.extraInfo = Object.assign(
        {},
        videoResponse.data.items[0].tags,
        videoResponse.data.items[0].contentDetails,
        videoResponse.data.items[0].statistics,
        videoResponse.data.items[0].player,

      )

      //get channel info
      const channelResponse = await axios.get(`/channels?part=snippet&par=statistics&part=contentDetails&id=${video.snippet.channelId}`)
      const channelResultA = channelResponse.data.items[0].snippet;
      const channelResultB = channelResponse.data.items[0].statistics;
      const channelInfo = Object.assign(
        {},
        {
          ...channelResultA,
          ...channelResultB
        }
      )
      video.channelInfo = channelInfo

    }
    
    return videosArr;
  } catch (error) {
    console.log(error)
  }
}