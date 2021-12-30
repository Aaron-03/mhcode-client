import React, { useEffect, useRef } from 'react';
import useForm from '../../hooks/useForm';
import useLottie from '../../hooks/useLottie';
import ContactInput from './ContactInput';

const ContactForm = () => {
  
  const { data, handleChange } = useForm();
  const anim = useRef();
  const lottieURL = 'https://assets8.lottiefiles.com/packages/lf20_uya4kd2o.json';
  const { loadLottie } = useLottie(lottieURL);

  useEffect(() => {
    loadLottie(anim.current);

    return () => {
      anim.current.innerHTML = '';
    }
  }, []);

  return (
    <>
      <p className='contact__description'>
        <span>Solicita gratis una cotización</span> de tu próximo proyecto.
        Aterriza tus ideas y elige el camino apropiedo <span>para construir tu proyecto</span>.
      </p>

      <form className='contact__form'>
        <div>
          <ContactInput
            lblName='Tu nombre'
            name='name'
            data={ data }
            handleChange={ handleChange }
            placeholder='Juan Perez'
          />

          <ContactInput
            lblName='Email'
            name='email'
            data={ data }
            handleChange={ handleChange }
            placeholder='example@example.com'
            isEmail={ true }
          />

          <ContactInput
            lblName='Asunto'
            name='matter'
            data={ data }
            handleChange={ handleChange }
            placeholder='Landing page para mi negocio'
          />

          <ContactInput
            lblName='Tu nombre'
            name='name'
            type='textarea'
            data={ data }
            handleChange={ handleChange }
            placeholder='Hola, quisiera cotizar mi proyecto...'
          />

          <div className='form__btn'>
            <button
              id='btnSend'
              type='submit'
              className='btn btn-dark'
            >
              Enviar
              <span>&#128526;</span>
            </button>
          </div>
        </div>

        <div id='cover__anim-form' className='cover__anim-form' ref={ anim }></div>
      </form>
    </>
  )
}

export default ContactForm;
