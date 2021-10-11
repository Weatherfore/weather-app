const validation = (userData3) => {
    let errors = {};
    if(!userData3.userId){
        errors.userId = "User Id is required."
    }
    if(!userData3.userName){
        errors.userName = "userName is required."
    }else if(!/^[a-zA-Z ]{2,40}$/.test(userData3.userName)){
        errors.userName = "userName is invalid."
    }
    if(!userData3.userPassword){
        errors.userPassword = "Password is required."
    }

    return errors;
}

export default validation;