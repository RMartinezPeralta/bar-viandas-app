import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const Register = () => {
  let navigate = useNavigate();

  const [name, setName] = useState('Melki Belizaire');
  const [email, setEmail] = useState('melki@gmail.com');
  const [legajo, setLegajo] = useState('12345');
  const [password, setPassword] = useState('password');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !legajo || !password) {
      setIsError(true);
      return;
    }
    // const user = { name, email, legajo, password };
    // console.log(user);

    createUserWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response);
      sessionStorage.setItem('melkiToken', response._tokenResponse.refreshToken)
      navigate('/');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        // toast.error('Email Already in Use');
        setIsError(true);
      }
    });
  };

  return (
    <div className="container-fluid">
      <div className="wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="title">Registrar</h2>
          <div className="register-input">
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
              placeholder="Nombre"
            />
          </div>
          <div className="register-input">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Email"
            />
          </div>
          <div className="register-input">
            <label>Legajo</label>
            <input
              type="text"
              value={legajo}
              onChange={(e) => setLegajo(e.target.value)}
              className="input"
              placeholder="Legajo"
            />
          </div>
          <div className="register-input">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" className="add btn btn-block">
            Registrarme
          </button>
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link to={'/login'}>Ingresar</Link>
        </p>
        {isError && <p className="error">Todos los campos son obligatorios.</p>}
      </div>
    </div>
  );
};

export default Register;
