import React from 'react';

const ContactInput = ({
  lblName = '',
  name = '',
  data,
  handleChange,
  placeholder = '',
  type = 'input',
  isEmail = false
}) => {

  const inputType = isEmail ? 'email' : 'text';

  return (
    <div className='contact__form-group'>
      <label
        htmlFor=""
        className='contact__form-label'
      >{ lblName }</label>
      {
        type === 'input'
        ? <input
            type={ inputType }
            name={ name }
            value={ data.value }
            className='contact__form-input'
            placeholder={ placeholder }
            onChange={ handleChange }
          />
        : <textarea
            id=""
            cols="30"
            rows="10"
            name={ name }
            value={ data.value }
            placeholder={ placeholder }
            className='contact__form-textarea'
            onChange={ handleChange }
          ></textarea>
      }
    </div>
  )
}

export default ContactInput
