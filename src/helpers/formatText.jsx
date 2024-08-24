//video description 부분에서 url은 a태그로 바꿔주는 함수

const formatText = text => {
  const formattedText = text.split(' ').map((x, i) => x.startsWith('https') ?
  <a key={i} href={x}>{x}</a> : <span key={i}>{x}</span> )

  return formattedText
}


export default formatText
