import { useRef } from 'react';

export default function Login() {
    const idRef = useRef(null);
    const pwdRef = useRef(null);

    const handleLoginCheck = () => {
        if(idRef.current.value.trim() === "") {
            alert("아이디를 입력해주세요");
            idRef.current.focus();
        } else if(pwdRef.current.value.trim() === "") {
            alert("패스워드를 입력해주세요");
            pwdRef.current.focus();
        } else {
            //아이디, 패스워드 전송 ==> Object Literal
            //{id:'test', pwd:'1234'}
            let sendObj = {
                id: idRef.current.value.trim(),
                pwd: pwdRef.current.value.trim()
            }
            console.log("서버 전송-->", sendObj);            
        }
    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();

        if(idRef.current.value.trim() === "") {
            alert("아이디를 입력해주세요");
            idRef.current.focus();
        } else if(pwdRef.current.value.trim() === "") {
            alert("패스워드를 입력해주세요");
            pwdRef.current.focus();
        } else {
            //아이디, 패스워드 전송 ==> Object Literal
            //{id:'test', pwd:'1234'}
            let sendObj = {
                id: idRef.current.value.trim(),
                pwd: pwdRef.current.value.trim()
                
            }
            console.log("서버 전송-->", sendObj);            
        }
    }

    return (
        <>
            <h1>로그인 폼</h1>
            <form name="login_form" onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <label htmlFor="id">아이디</label>
                        <input  type="text" 
                                id="id" 
                                name="id"
                                ref={idRef} />
                    </li>
                    <li>
                        <label htmlFor="pwd">패스워드</label>
                        <input  type="password" 
                                id="pwd" 
                                name="pwd"
                                ref={pwdRef} />
                    </li>
                    <li>
                        <button type="submit">Login</button>
                        <button>Reset</button>
                    </li>
                </ul>
            </form>
        </>
    )
}