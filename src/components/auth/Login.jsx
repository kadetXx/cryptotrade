import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.scss";
import Cookies from "universal-cookie";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    const cookies = new Cookies();

    // cookies.set("auth_token", "12345", {
    //   path: "/",
    //   expires: new Date(Date.now() + 10525920000),
    // });

    axios
      .post(`${process.env.REACT_APP_URL}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");

        // cookies.set("auth_token", "12345", {
        //   path: "/",
        //   expires: new Date(Date.now() + 10525920000),
        // });
      })
      // .then(() => {
      //   setLoginSuccess(true);
      // })
      .catch((err) => console.log(err));

    cookies.get('auth_token') ? setLoginSuccess(false) : setLoginSuccess(false);
  };

  return (
    
    <div id='login'>
      <div className='page-title'>
        <h2>
          <span className='material-icons'>security</span> Trddex
        </h2>
      </div>

      <div className='form-container'>
        <div className='title'>
          <h3>Login to your account</h3>
        </div>
        <form onSubmit={submitForm}>
          <label>
            <span className='material-icons'>mail</span>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className='material-icons'>lock</span>
            <input
              type='password'
              placeholder='Choose password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.values)}
            />
          </label>

          <input type='submit' className='button' value='Login' />
        </form>
      </div>

      {loginSuccess ? <Redirect to={{ pathname: '/dashboard'}} /> : '' }
    </div>
  );
}

export default Login;
