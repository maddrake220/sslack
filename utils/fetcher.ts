import axios from 'axios';
const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true, // front와 back 도메인이 다르면 쿠키 생성안됨, 그래서 이 설정을 추가해주면 생성 됨
      // get 요청에서는 두번째 자리
    })
    .then((response) => response.data);

export default fetcher;

// fetcher를 여러개 만들어서 전역데이터 관리
