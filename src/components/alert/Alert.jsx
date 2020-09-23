import React from "react";
import { Link } from "react-router-dom";

import "./Alert.scss";

function Alert({ icon, title, link, action }) {
  return (
    <div id='alert'>
      <div className='box'>
        {icon === "danger" ? (
          <span className='material-icons danger'>error_outline</span>
        ) : (
          <span className='material-icons success'>done_outline</span>
        )}
        <h2 className='heading'> {title} </h2>
        <Link to={link}>
          <button className='secondary' onClick={action}>
            Proceed
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Alert;
