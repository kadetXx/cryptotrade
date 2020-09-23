import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Auth.scss";
import Alert from '../alert/Alert'
import axios from "axios";

function SignUp() {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post(`${process.env.REACT_APP_URL}/register/`, {
      email: email,
      full_name: fullName,
      password: password
    })
    .then(res => {
      console.log(res);
      setFullname('');
      setEmail('');
      setPassword('');
      setLoading(false);
      setSuccess(true)
    })
    .catch(err => {
      console.log(err)
      setError(true);
      setLoading(false);
    });

  };

  return (
    <div id='sign-up'>
      <div className='page-title'>
        <h2>
          <span className='material-icons'>security</span> Trddex
        </h2>
      </div>

      <div className='form-container'>
        <div className='title'>
          <h3>Create an account</h3>
        </div>
        <form onSubmit={submitForm}>
          <label>
            <span className='material-icons'>person</span>
            <input
              required
              type='text'
              placeholder='Fullname'
              name='fullname'
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>

          <label>
            <span className='material-icons'>mail</span>
            <input
              required
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
              required
              minLength='6'
              type='password'
              placeholder='Choose password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {!loading ? (
            <input type='submit' className='button' value='Sign Up' />
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
      </div>

      {
        success && <Alert icon='success' title='Account Created' link='/login' action={() => setSuccess(false)} />
      }

      {
        error && <Alert icon='danger' title='An error occured' link='#' action={() => setError(false)} />
      }
      
    </div>
  );
}

export default SignUp;
