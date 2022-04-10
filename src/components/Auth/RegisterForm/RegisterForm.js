import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Form, Input } from 'semantic-ui-react';
import { validateEmail } from '../../../utils/Validations';
import firebase from '../../../utils/Firebase';
import 'firebase/auth';

import "./RegisterForm.scss";

const initialValues = () => {
  return {
    email: "",
    password: "",
    username: ""
  }
}

const RegisterForm = ({ setSelectedForm }) => {

  const [formValues, setFormValues] = useState(initialValues());
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Muestra u oculta la Contraseña
  const handlerPassword = () => {
    setShowPassword(!showPassword);
  }

  // Escucha el evento change del formulario y guarda los valores de los inputs
  const onChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  }

  // Enviando el formulario
  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: Validar el formulario
  }

  return (
    <div className="register-form">
      <h1>Empieza a escuchar con una cueta de Musicfy gratis.</h1>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electrónico"
            icon="mail outline"
            // error={}
             />
        </Form.Field>
        <Form.Field>
          <Input
            type={ showPassword ? "text" : "password" }
            name="password"
            placeholder="Contraseña"
            icon={
              showPassword
              ? <Icon name="eye slash outline" link onClick={handlerPassword} />
              : <Icon name="eye" link onClick={handlerPassword} />
            }
            // error={}
             />
        </Form.Field>
        <Form.Field>
          <Input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            icon="user circle outline"
            // error={}
             />
        </Form.Field>
        <Button type="submit">Continuar</Button>
      </Form>
      <div className="register-form__options">
        <p onClick={ () => setSelectedForm(null) }>Volver</p>
        <p>
          Ya tines una cuenta?
          <span onClick={ () => setSelectedForm("login") }>Iniciar sesión</span>
        </p>
      </div>
    </div>
  )
}

export default RegisterForm;
