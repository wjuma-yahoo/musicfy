import React, { useState } from 'react';
import firebase from './utils/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const App = () => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si el usuario esta LOGUEADO
  const auth = getAuth();
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

  return (
    !user ? 'Usuario no logueado' : 'Usuario logueado'
  );
}
