import React, { useState } from 'react'
import styles from './Popup.module.css';
import './login.css'

const Popup = ({ isOpen, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSignInClick = () => {
    setIsActive(true);
  };

  const handleSignUpClick = () => {
    setIsActive(false);
  };

  if (!isOpen) return null;
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={`container ${isActive ? 'active' : ''}`}>
          <div className="box">
            <div className="form sign_in">
              <h3>Iniciar sesión</h3>

              <form action="#" id="form_input">
                <div className="type">
                  <input type="email" placeholder="Email" name="" id="email" />

                </div>
                <div className="type">
                  <input type="password" placeholder="Password" name="" id="password" />

                </div>

                <div className="forgot">
                  <span className='cursor-pointer hover:underline'>Olvidé mi contraseña</span>
                </div>

                <button className="btn bkg">Ingresar</button>
              </form>
            </div>

            <div className="form sign_up">
              <h3>Crear una cuenta</h3>
              {/* <span>o utiliza tu correo electrónico para registrarte</span> */}

              <form action="#" id="form_input">
                <div className="type">

                  <input type="text" name="" placeholder="Name" id="name" />
                </div>
                <div className="type">

                  <input type="email" name="" placeholder="Email" id="email" />
                </div>
                <div className="type">

                  <input type="password" name="" placeholder="Password" id="password" />
                </div>

                <button className="btn bkg">Registrar</button>
              </form>
            </div>
          </div>

          <div className="overlay">
            <div className="page page_signIn">
              <h3>Bienvenido de nuevo!</h3>
              {/* <p>Para seguir con nosotros, inicia sesión con tu información personal.</p> */}

              <button className="btn btnSign-in" onClick={handleSignInClick}>Registrarse <i className="bi bi-arrow-right"></i></button>
            </div>

            <div className="page page_signUp">
              <h3>Hola amigo!</h3>
              <p className='w-3/4'>Introduce tus datos personales y comienza tu viaje con nosotros.</p>

              <button className="btn btnSign-up" onClick={handleSignUpClick}>
                <i className="bi bi-arrow-left"></i> Iniciar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup