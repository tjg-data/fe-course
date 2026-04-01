let key = `6206e4e96646c240ac59f09bc0164ff9`;
// let targetDt = `20150101`;

const getJson = async(targetDt) => {
    const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
    let response = await fetch(data_url);
    return response.json();
}


//handleBoxOffice 함수 정의
const handleBoxOffice = async() => {
    let sdate = document.querySelector('#sdate').value;  
    if(sdate === '') {
        alert('날짜를 선택해주세요');
        document.querySelector('#sdate').focus();
    } else {
        targetDt = sdate.split("-").reduce((acc, cur)=> acc+cur);
        let kobis = await getJson(targetDt); 
        let kobisBoxOffice =  kobis.boxOfficeResult;
        let kobisBoxOfficeList =  kobis.boxOfficeResult.dailyBoxOfficeList;
console.log(kobis);

        let output = `
            <h1>${kobisBoxOffice.boxofficeType}</h1>
            <h3>${kobisBoxOffice.showRange}</h3>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                    <th>당일관객수</th>
                    <th>누적관객수</th>
                    <th>누적매출액</th>
                </tr>
                ${
                    kobisBoxOfficeList.map((movie) => `
                        <tr>
                            <td>${movie.rank}</td>
                            <td>${movie.movieNm}</td>
                            <td>${movie.openDt}</td>
                            <td>${parseInt(movie.audiCnt).toLocaleString()}명</td>
                            <td>${parseInt(movie.audiAcc).toLocaleString()}원</td>
                            <td>${parseInt(movie.salesAcc).toLocaleString()}원</td>
                        </tr>
                    `).join("")
                }
            </table>
        `;

        document.querySelector('#content').innerHTML = output;
    } 
    
}
