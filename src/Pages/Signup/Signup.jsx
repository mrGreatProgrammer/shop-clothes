import "./Signup.css";
import registrationImg from "../../img/registration/14.png";
import Input from "../../components/Input/Input";
import { useState } from "react";
import AuthBtn from "../../components/AuthBtn/AuthBtn";

function SignUp() {
  let [name, setName] = useState("")
  let [secondName, setSecondName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  return (
    <div className="signup">
      <div className="signup__inner">
        <h4>Регистрация</h4>
        <div className="signup--form">
          <Input  className="signup-inp" 
            value={name}
            setValue={setName}
            type="text"
            name="user-name"
            id="signup-name"
            placeholder="Имя"
          />
          <Input 
          className="signup-inp"
          value={secondName}
            setValue={setSecondName}
            type="text"
            name="user-second-name"
            id="signup-second_name"
            placeholder="Фамилия"
          />
          <Input 
          className="signup-inp"
          value={email}
            setValue={setEmail}
            type="email"
            name="user-email"
            id="signup-email"
            placeholder="Email"
          />
         <Input 
          className="signup-inp"
          value={password}
            setValue={setPassword}
            type="password"
            name="user-password"
            id="signup-password"
            placeholder="Пароль"
          />
          <p className="checkbox-container">
            <input
              className="signup-checkbox"
              type="checkbox"
              name="except"
              id="except"
            />{" "}
            <label htmlFor="except">Принимаю условия пользования</label>
          </p>
          <p className="checkbox-container">
            <input
              className="signup-checkbox"
              type="checkbox"
              name="yes"
              id="yes"
            />
            <label htmlFor="yes">Даю согласие на обработку данных</label>
          </p>
          <AuthBtn className="signup-btn" txt="Зарегистрироваться" />
        </div>
      </div>
      <div className="signup-div-img">
        <img src={registrationImg} alt="" className="signup-img" />
      </div>
    </div>
  );
}

export default SignUp;
