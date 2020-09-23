import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

class Unauthenticated extends Component {
  render() {

    const cookies = new Cookies();
    const Component = this.props.component;
    const isAthenticated = cookies.get('auth_token');

    return isAthenticated ? (
      <Redirect to={{ pathname: '/dashboard' }} /> 
    ) : (
      <Component />
    )
  }
}

export default Unauthenticated
