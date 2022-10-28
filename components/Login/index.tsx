import { Input, Button } from "antd";
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Wrap } from "./styled";
import { login as loginActions } from "../../components/Login/state/actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  useEffect(() => {
    console.log("ID : ", id);
  }, [id]);

  useEffect(() => {
    console.log("PW : ", password);
  }, [password]);

  const onClickLogin = () => {
    let saveData = { id: id, password: password };
    dispatch(loginActions(saveData));
  };

  return (
    // 2022-10-24 이상원 : 근데 우리 Form 안쓸거임?
    <Wrap>
      <Input
        placeholder="아이디"
        style={{ width: 400 }}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Input
        placeholder="비밀번호"
        style={{ width: 400, marginTop: 20 }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        type="primary"
        danger
        style={{ width: 400, marginTop: 40 }}
        onClick={onClickLogin}
      >
        로그인
      </Button>
    </Wrap>
  );
};

// const mapDispatchToProps = (dispatch: any) => ({
//   loginAction: (params: any) => dispatch(loginActions(params)),
// });

// export default connect(null, mapDispatchToProps)(Login);
export default Login;
