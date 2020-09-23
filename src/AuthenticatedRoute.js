import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

class ProtectedRoute extends Component {
  render() {

    const cookies = new Cookies();
    const Component = this.props.component;
    const isAthenticated = cookies.get('auth_token');

    return isAthenticated ? (
      <Component token={cookies.get('auth_token')} />
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  }
}

export default ProtectedRoute
