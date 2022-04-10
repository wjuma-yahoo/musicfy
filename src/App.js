import React, { useState } from 'react';

// Componentes
import Auth from './pages/Auth';

// Libraries
import styled from '@emotion/styled';
import { Button, Container } from 'semantic-ui-react';

// Firebase
import firebase from './utils/Firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
const auth = getAuth();

// Variables
const UserLoggedStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const App = () => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si el usuario esta LOGUEADO
  onAuthStateChanged(auth, (currentUser) => {
    if(!currentUser) {
      setUser(null);
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  });

  if(isLoading) {
    return null;
  }

  return (!user) ? <Auth /> : <UserLogged />

}

const UserLogged = () => {

  const logout = () => {
    signOut();
  }

  return (
    <UserLoggedStyles>
      <h1>Usuario logueado</h1>
      <Button onClick={logout}>Cerrar session</Button>
    </UserLoggedStyles>
  )
}
