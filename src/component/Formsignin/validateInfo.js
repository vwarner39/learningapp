function validateInfo(values){
    let errors={}
    if(!values.email){
        errors.email='email required'
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email='email address is invalid'
    }
    if(!values.password){
        errors.password='password is required'
    }else if (values.password.length<6){
        errors.password='password needs to be 6 characters or more'
    }

    return errors
}

export default validateInfo