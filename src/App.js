import React from 'react';
import Firebase from './utils/Firebase';
import 'firebase/auth';

export const App = () => {

  Firebase.auth().onAuthStateChanged(currentUser => {
    console.log( currentUser ? 'Esta autenticado' : 'No esta autenticado' );
  })

  return (
    <div className="App">
      Hola mundo
    </div>
  );
}
