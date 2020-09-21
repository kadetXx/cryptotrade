import React, {useState} from "react";
import "./Auth.scss";
import Cookies from 'universal-cookie';
// import axios from 'axios'

function SignUp() {
  const [fullName, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    const cookies = new Cookies();
    cookies.set('auth_token', '12345', { 
      path: '/',
      // secure: true,
      expires: new Date(Date.now()+10525920000)
    });

    setFullname('');
    setEmail('');
    setPassword('');

    console.log(cookies.get('auth_token'));

    // axios.post(`${process.env.REACT_APP_URL}register`, {
    //   email: email,
    //   full_name: fullName,
    //   password: password
    // })
    // .then(res => {
    //   console.log(res);
    //   setFullname('');
    //   setEmail('');
    //   setPassword('');
    // })
    // .catch(err => console.log(err));
  }

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
        <form onSubmit={submitForm} >
          <label>
            <span className='material-icons'>person</span>
            <input required type='text' placeholder='Fullname' name='fullname' value={fullName} onChange={(e) => setFullname(e.target.value)} />
          </label>

          <label>
            <span className='material-icons'>mail</span>
            <input required type='text' placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>

          <label>
            <span className='material-icons'>lock</span>
            <input required minLength='6' type='password' placeholder='Choose password' name='password' value={password} onChange={(e) => setPassword(e.target.values)} />
          </label>

          <input type="submit" className='button' value="Sign Up"/>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
