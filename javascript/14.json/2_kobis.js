let key = `6206e4e96646c240ac59f09bc0164ff9`;
let targetDt = `20150101`;
const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;




//handleBoxOffice 함수 정의
const handleBoxOffice = () => {
    let sdate = document.querySelector('#sdate').value;  
    if(sdate === '') {
        alert('날짜를 선택해주세요');
        document.querySelector('#sdate').focus();
    } else {
        let dateArray = new String(sdate).split("-");
        targetDt = dateArray[0]+dateArray[1]+dateArray[2];
        console.log(sdate, typeof sdate);  
        console.log(targetDt);  
        
    } 
    
}
