import { useState } from "react";
import AuthBtn from "../../components/AuthBtn/AuthBtn";
import Input from "../../components/Input/Input";
import registrationImg from "../../img/registration/14.png";
import "./LogIn.css";

function LogIn() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__inner">
        <h4>Вход</h4>
        <div className="login--form">
          <Input
            className="signup-inp"
            value={email}
            setValue={setEmail}
            type="email"
            name="user-email"
            id="login-email"
            placeholder="Email"
          />
          <Input
            className="signup-inp"
            value={password}
            setValue={setPassword}
            type="password"
            name="user-email"
            id="login-password"
            placeholder="Пароль"
          />
          <AuthBtn className="login-btn" txt="Войти" />
        </div>
      </div>
      <div className="signup-div-img">
        <img src={registrationImg} alt="" className="signup-img" />
      </div>
    </div>
  );
}

export default LogIn;
