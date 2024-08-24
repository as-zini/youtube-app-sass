//단위로 나눠져있지 않은 수를 단위로 나눠주기 위한 함수 ex 100000 => 100,000

const formatNumber = num => {
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export default formatNumber