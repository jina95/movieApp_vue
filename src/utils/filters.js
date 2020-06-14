// 필터 관련 함수가 존재하는 파일
export function srcCheck(item) {
  // poster 주소를 인자로 받아와서
  if (item.includes('|')) {
    //|가 포함되있다면(중복될때 | 가 들어감)
    return item.substring(0, item.indexOf('|'));
    // substring 으로 0번째 글자부터 |의 위치를 받아와서 자른다.
    // substring([시작위치], [종료위치]);
  } else if (item === '') {
    // 포스터 주소가 비어져 있을때
    return 'http://placehold.it/213x316';
  } else return item;
  // | 를 포함하지 않는다는 것은 주소가 중복이 아니기 때문에 리턴해준다.
}
