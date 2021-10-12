const validation = (userData3) => {
    let errors = {};
    if(!userData3.rid){
        errors.rid = "User Id is required."
    }
    if(!userData3.userName){
        errors.userName = "userName is required."
    }else if(!/^[a-zA-Z ]{2,40}$/.test(userData3.userName)){
        errors.userName = "userName is invalid."
    }
    if(!userData3.password){
        errors.password = "Password is required."
    }else if(userData3.password !== userData3.reEnterPassword){
        errors.reEnterPassword = "Password and reEnterPasswords are not matching."
    }

    return errors;
}

export default validation;