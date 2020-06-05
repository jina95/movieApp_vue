function saveTypeToCookie(value) {
  document.cookie = `til_type=${value}`;
}

function saveValueToCookie(value) {
  document.cookie = `til_value=${value}`;
}
function saveInforMoiveToCookie(value) {
  document.cookie = `til_inforMovie=${value}`;
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

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
  saveTypeToCookie,
  saveValueToCookie,
  saveInforMoiveToCookie,
  getTypeFromCookie,
  getValueFromCookie,
  deleteCookie,
};
