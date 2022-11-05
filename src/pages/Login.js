import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';

const Login = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!email || !password ) {
      setIsError(true);
      return;
    }
    const user = {email, password}
    console.log(user);

    signInWithEmailAndPassword(auth, email, password)
    .then((response) => {
      console.log(response);
      sessionStorage.setItem('melkiToken', response._tokenResponse.refreshToken)
      navigate('/');
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        setIsError(true);
      }
    });
  }

  return (
    <div className="container-fluid">
      <div className="wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="title">Ingresar</h2>
          <div className="register-input">
            <label>email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="email"
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
            Ingresar
          </button>
        </form>        
        <p>¿No posee una cuenta? <Link to={"/register"}>Registrar</Link></p>
        {isError && <p className="error">Ingresar usuario correcto.</p>}
      </div>
    </div>
  )
}

export default Login;