// 쿠키저장
function saveTypeToCookie(value) {
  document.cookie = `til_type=${value}`;
}
function saveValueToCookie(value) {
  document.cookie = `til_value=${value}`;
}
function saveMovieIdToCookie(value) {
  document.cookie = `til_movieId=${value}`;
}
function saveMovieSeqToCookie(value) {
  document.cookie = `til_movieSeq=${value}`;
}
function saveSimilarKeywordToCookie(value) {
  document.cookie = `til_similarKeyword=${value}`;
}
function saveHeartMIToCookie(value) {
  document.cookie = `til_heartMI=${value}`;
}
function saveHeartMSToCookie(value) {
  document.cookie = `til_heartMS=${value}`;
}

//  쿠키 불러오기
function getTypeFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_type\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getValueFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_value\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getMovieIdFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_movieId\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getMovieSeqFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_movieSeq\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getSimilarKeywordFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_similarKeyword\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getHeartMIFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_heartMI\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getHeartMSFromCookie() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_heartMS\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

// 쿠키 지우기
function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveTypeToCookie,
  saveValueToCookie,
  saveMovieIdToCookie,
  saveMovieSeqToCookie,
  saveSimilarKeywordToCookie,
  saveHeartMIToCookie,
  saveHeartMSToCookie,
  getTypeFromCookie,
  getValueFromCookie,
  getMovieIdFromCookie,
  getMovieSeqFromCookie,
  getSimilarKeywordFromCookie,
  getHeartMIFromCookie,
  getHeartMSFromCookie,
  deleteCookie,
};
