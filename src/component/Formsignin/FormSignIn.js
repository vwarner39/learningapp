import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'
const FormSignIn = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors}=useForm(submitForm,validate)
    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <h1>Welcome to App login in here</h1>
                <div className='form-inputs'>
                    <label htmlFor='email'  className='form-label'>
                        Email
                    </label>
                    <input 
                        id='email'
                        type='email' 
                        name='email' 
                        className='form-input' 
                        placeholder='enter your email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}      
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password'  className='form-label'>
                        Password
                    </label>
                    <input 
                        id='password'
                        type='password' 
                        name='password' 
                        className='form-input' 
                        placeholder='enter your password'
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Login</button>

            </form>
        </div>
    )
}

export default FormSignIn
