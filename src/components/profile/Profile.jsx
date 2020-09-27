import React, { useState, useEffect } from "react";
import "./Profile.scss";
import Cookies from "universal-cookie";
import Layout from "../layout/Layout";
import axios from "axios";

function Profile() {
  const [full_name, setFullName] = useState("Local Host");
  const [email, setEmail] = useState("test@test.com");
  const [deposit, setdeposit] = useState("");
  const [tradingCode, setTradingCode] = useState("TRD139824827");
  const [avatar, setAvatar] = useState('');
  const [editProfile, setEditProfile] = useState(false);

  const cookies = new Cookies();
  const authtoken = cookies.get('auth_token');
  

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/profile`, {
        headers: {
          'Authorization': `Token ${authtoken}`
        }
      })
      .then((res) => {
        console.log(res.data.data);
        setFullName(res.data.data.full_name);
        setEmail(res.data.data.email);
        setTradingCode(res.data.data.trading_code);
        setAvatar(res.data.data.image);
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line
  }, []);

  return (
    <div id='profile'>
      <Layout activeMenu='profile'>
        <section className='page-header'>
          <div className='title'>
            <h2>Profile</h2>
          </div>
        </section>

        <section className='top'>
          <section>
            <div className='box profile-box'>
              <div className='avi-container'>
                <img src='/assets/img/default.png' alt='user' />
              </div>

              <div className='form-container'>
                <form className={editProfile ? "edit-mode" : ""}>
                  <label>
                    <span>
                      Name <b>:</b>
                    </span>
                    <input
                      type='text'
                      name='fullname'
                      size={full_name.length}
                      disabled={!editProfile}
                      value={full_name}
                      placeholder={full_name}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>
                      Email Address <b>:</b>{" "}
                    </span>
                    <input
                      type='text'
                      name='email'
                      size={email.length}
                      disabled={!editProfile}
                      value={email}
                      placeholder={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>
                      deposit ID <b>:</b>{" "}
                    </span>
                    <input
                      type='text'
                      name='deposit address'
                      size={deposit.length || 3}
                      disabled={!editProfile}
                      value={deposit}
                      placeholder='Not set'
                      onChange={(e) => setdeposit(e.target.value)}
                    />
                    {deposit.length < 5 && !editProfile && (
                      <span
                        className='material-icons'
                        style={{
                          color: "#FB775E",
                          position: "relative",
                          top: "2px",
                        }}
                      >
                        error_outline
                      </span>
                    )}
                  </label>
                  <label>
                    <span>
                      Trading Code <b>:</b>{" "}
                    </span>
                    <input
                      type='text'
                      name='trading code'
                      size={tradingCode.length}
                      disabled={!editProfile}
                      value={tradingCode}
                      placeholder={tradingCode}
                      onChange={(e) => setTradingCode(e.target.value)}
                    />
                  </label>
                  <div className='button-container'>
                    {!editProfile ? (
                      <button
                        type='button'
                        className='primary'
                        onClick={(e) => setEditProfile(true)}
                      >
                        Edit Profile
                      </button>
                    ) : (
                      <button
                        type='button'
                        className='secondary'
                        onClick={(e) => setEditProfile(false)}
                      >
                        Save Profile
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </section>

          <section>
            <div className='box password-box'>
              <div
                className='section-title'
                style={{ marginBottom: "10px", fontWeight: "100" }}
              >
                <h4
                  style={{
                    fontWeight: "400",
                    fontSize: "1.3rem",
                    padding: "1rem 0",
                  }}
                >
                  Change Password
                </h4>
              </div>

              <form>
                <input type="password" placeholder='Current Password' />
                <input type="password" placeholder='New password' />
                <input type="password" placeholder='Confirm new Password' />
                <button type="submit"className='primary'>Submit</button>
              </form>
            </div>
          </section>
        </section>

        <section className='calc'></section>

        <section className='transactions'></section>
      </Layout>
    </div>
  );
}

export default Profile;
