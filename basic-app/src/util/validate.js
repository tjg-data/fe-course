/**
 * UserInfo 컴포넌트 폼 체크 함수
 */
export const validateUserInfo = (nameRef, ageRef, addressRef) => {
    if(nameRef.current.value.trim() === "") {
        nameRef.current.focus();
        return false;
    } else if(ageRef.current.value.trim() === "") {
        ageRef.current.focus();
        return false;
    } else if(addressRef.current.value.trim() === "") {
        addressRef.current.focus();
        return false;
    } 
    return true;
}