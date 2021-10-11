const validation = (user) => {
    let errors = {};
    if(!user.rid){
        errors.rid = "id is required."
    }
    if(!user.userName){
        errors.userName = "UserName is required."
    }
    if(!user.password){
        errors.password = "Password is required."
    }
    if(!user.reEnterPassword){
        errors.reEnterPassword = "Re enter Password is required."
    }

    return errors;
}

export default validation;