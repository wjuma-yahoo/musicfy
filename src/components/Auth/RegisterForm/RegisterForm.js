import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Form, Input } from 'semantic-ui-react';
import firebase from '../../../utils/Firebase';
import 'firebase/auth';

import "./RegisterForm.scss";

const RegisterForm = (props) => {

  const { setSelectedForm } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado!');
  }

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cueta de Musicfy gratis.</h1>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electronico"
            icon="mail outline"
            // onChange={}
            // error={}
             />
        </Form.Field>
        <Form.Field>
          <Input
            type="password"
            name="password"
            placeholder="Contrasena"
            icon="eye"
            // onChange={}
            // error={}
             />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            icon="user circle outline"
            // onChange={}
            // error={}
             />
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p>Volver</p>
        <p>
          Ya tines una cuenta?
          <span>Iniciar session</span>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm;
