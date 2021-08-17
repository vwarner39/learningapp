import React,{useState} from 'react'
import FormSignIn from './FormSignIn'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted,setIsSubmitted]=useState(false)
    
    function submitForm(){
        setIsSubmitted(true)
    }

    return (
        <>
        <div className='form-container'>
            <span className='close-btn'>x</span>
            <div className='form-content-left'>

            </div>
            {!isSubmitted? <FormSignIn submitForm={submitForm}/>:<FormSuccess/>}

        </div>
        </>
    )
}

export default Form
