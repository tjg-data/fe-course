let key = `6206e4e96646c240ac59f09bc0164ff9`;
let targetDt = `20260101`;
const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;

const getJson = async() => {
    // console.log(data_url);    
    let response = await fetch(data_url);
    return response.json();
}

const show = async() => {
    //1. JSON 데이터 가져오기
    let kobis = await getJson();
    console.log(kobis);

    //2. 출력 데이터 생성 : DHTML

    //3. 출력
}

window.addEventListener('DOMContentLoaded', () => {
    show();
})
