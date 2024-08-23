//조회수에 단위를 붙여주기 위한 함수
//소수점을 날려주고 단위 붙여줌

const formatViews = num => {
  if(num > 999 && num < 1000000){
    return(num/1000).toFixed(0) + 'K';
  } else if( num > 1000000){
    return (num/100000).toFixed(0) + 'M';
  } else{
    return num;
  }
}

export default formatViews;