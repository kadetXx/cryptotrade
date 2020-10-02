import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Auth.scss";
import Alert from '../alert/Alert'
import Cookies from "universal-cookie";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('')

  const cookies = new Cookies();

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.REACT_APP_API}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        setEmail("");
        setPassword("");

        cookies.set("auth_token", `${res.data.token}`, {
          path: "/",
          expires: new Date(res.data.expiry)
        });
      })
      .then(() => {

        if (cookies.get('auth_token')) {
          setLoading(false);
          setSuccess(true);
        } else {
          setLoading(false);
          setError(true);
        }
        
      })
      .catch((err) => {
        setLoading(false);
        setErrMessage(err.response.data.non_field_errors)
        setError(true);
      });
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
              type='email'
              required
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span className='material-icons'>lock</span>
            <input
              type='password'
              required
              placeholder='Your password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {!loading ? (
            <input type='submit' className='button' value='Login' />
          ) : (
            <button className='button'>
              <img
                className='loader-img'
                src='/assets/img/ajaxloader.gif'
                alt=''
              />
            </button>
          )}
        </form>
        <p className="info">Don't have an account? <Link to='/sign-up'>Sign Up</Link></p>
      </div>

      {
        error && <Alert icon='danger' title={errMessage} link='#' action={() => setError(false)} />
      }

      {success ? <Redirect to={{ pathname: '/dashboard'}} /> : '' }
    </div>
  );
}

export default Login;
