import { Input, Button } from 'antd';
import React from 'react';
import "antd/dist/antd.css";
import { Wrap } from './styled';


const Login = () => {
   const a = 2;
   return (
        <Wrap>
            <Input placeholder='아이디' style={{width: 400}}/>
            <Input placeholder='비밀번호' style={{width: 400, marginTop: 20}}/>            
            <Button type="primary" danger style={{width: 400, marginTop: 40}}>로그인</Button>
        </Wrap>
    )
}

export default Login;