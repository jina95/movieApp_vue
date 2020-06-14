function saveTypeToCookie(value) {
  document.cookie = `til_type=${value}`;
}

function saveValueToCookie(value) {
  document.cookie = `til_value=${value}`;
}
function saveMovieIdToCookie(value) {
  document.cookie = `til_movieId=${value}`;
  // document.cookie = `til_movieSeq=${value}`;
}
function saveMovieSeqToCookie(value) {
  document.cookie = `til_movieSeq=${value}`;
}

function saveSimilarKeywordToCookie(value) {
  document.cookie = `til_similarKeyword=${value}`;
}

// function saveValueToCookie(value) {
//   document.cookie = `til_value=${value}`;
// }

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

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveTypeToCookie,
  saveValueToCookie,
  saveMovieIdToCookie,
  saveMovieSeqToCookie,
  saveSimilarKeywordToCookie,
  getTypeFromCookie,
  getValueFromCookie,
  getMovieIdFromCookie,
  getMovieSeqFromCookie,
  getSimilarKeywordFromCookie,
  deleteCookie,
};
