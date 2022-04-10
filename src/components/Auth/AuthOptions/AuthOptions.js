import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './AuthOptions.scss';

const AuthOptions = (props) => {

  const { setSelectedForm } = props;

  return (
    <div className="auth-options">
      <h2>Millones de canciones, gratis en Musicfy</h2>
      <Button
        onClick={() => setSelectedForm("register")}
        className="register">Registrate gratis</Button>
      <Button
        onClick={() => setSelectedForm("login")} 
        className="login">Iniciar session</Button>
    </div>
  )
}

export default AuthOptions;

AuthOptions.propTypes = {
  setSelectedForm: PropTypes.func.isRequired
}
