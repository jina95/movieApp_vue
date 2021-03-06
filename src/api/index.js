import axios from 'axios';

// const instance = axios.create({
//   baseURL:
// 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&director=박찬욱&ServiceKey=GSWDA51M976509D7B9LM',
//   myKey: '&ServiceKey=GSWDA51M976509D7B9LM',
// });
//http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=인증키값
// http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=GSWDA51M976509D7B9LM
// 내 인증 키 코드 : GSWDA51M976509D7B9LM
// function searchMovie() {
//   return instance.post();
// }
const config = {
  baseURL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&listCount=100&sort=prodYear,1&',
  baseURL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&sort=prodYear,1&',
  myKey: '&ServiceKey=GSWDA51M976509D7B9LM',
};

function fetchMovie(value) {
  return axios.get(`${config.baseURL}listCount=100&${value}${config.myKey}`);
}
function fetchSimilarMovie(value) {
  return axios.get(`${config.baseURL}listCount=10&${value}${config.myKey}`);
}
function fetchHeartMovie(value) {
  return axios.get(`${config.baseURL}&${value}${config.myKey}`);
}
// function fetchInforMovie(value) {
//   return axios.get(`${config.baseURL}${value}${config.myKey}`);
// }

export { fetchMovie, fetchSimilarMovie, fetchHeartMovie };
