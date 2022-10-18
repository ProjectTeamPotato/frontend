import { useEffect, useState } from "react";
import Input from "../Input";
import { LoginButton, Wrap } from "./styled";

const Login = () => {
    const [id, setId] = useState();
    const [password, setPassword] = useState();

    const isValidLogin = () => {
        if (!id || !password) {
            alert('fail');
        }

        alert('ok');
    }

    useEffect(() => {
        console.log(id, password);
    }, [id, password]);
    
    return (
        <Wrap>
            <Input placeholder="아이디" onChange={(e) => setId(e.target.value)}/>
            <Input placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)}/>            
            <LoginButton onClick={ isValidLogin }>
                로그인
            </LoginButton>
        </Wrap>
    )
}

export default Login;