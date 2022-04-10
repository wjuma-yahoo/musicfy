import React, { useState } from 'react';
import styled from '@emotion/styled';
import AuthOptions from '../../components/Auth/AuthOptions';
import RegisterForm from '../../components/Auth/RegisterForm';
import LoginForm from '../../components/Auth/LoginForm';
import BackgroundAuth from '../../assets/jpg/background-auth.jpg';
import LogoNameWhite from '../../assets/png/logo-name-white.png';

import './Auth.scss';

const Wrapper = styled.div`
  background-image: url(${BackgroundAuth})
`;

const Auth = () => {

  const [selectedForm, setSelectedForm] = useState(null);

  const handlerForm = () => {
    switch (selectedForm) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      default:
        return <AuthOptions setSelectedForm={setSelectedForm}/>
    }
  }

  return (
    <Wrapper className="auth" >
      <div className="auth__dark">
        <div className="auth__box">
          <div className="auth__box-logo">
            <img src={LogoNameWhite} alt="Musicfy"/>
          </div>
          { handlerForm() }
        </div>
      </div>
    </Wrapper>
  );
}

export default Auth;
