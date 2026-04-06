/**
 * KOBIS, KMDB API를 활용한 박스 오피스
 */
const kobis_key = `6206e4e96646c240ac59f09bc0164ff9`;
const kmdb_key = `59H5F0U0OFQB3R2261VM`;

/** KOBIS API - 박스오피스 가져오기 */
async function getKobis() {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;
    url += `/searchDailyBoxOfficeList.json?`;
    url += `key=${kobis_key}`;
    url += `&targetDt=20260405`;

    let response = await fetch(url);
    return response.json();
}

async function createBoxoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(list);

    list.slice(0, 5).map((movie, idx) => {        
            console.log(movie.movieNm);            
    });
}

window.addEventListener('DOMContentLoaded', () => {
        createBoxoffice();
});

