const validation = (user) => {
    let errors = {};
    if(!user.rid){
        errors.rid = "id is required."
    }
    if(!user.userName){
        errors.userName = "UserName is required."
    }else if(!/^[a-zA-Z ]{2,40}$/.test(user.userName)){
        errors.userName = "User Name is invalid."
    }
    if(!user.password){
        errors.password = "Password is required."
    }
    if(!user.reEnterPassword){
        errors.reEnterPassword = "Re enter Password is required."
    }else if(user.password !== user.reEnterPassword){
        errors.reEnterPassword = "Password and reEnterPasswords are not matching."
    }

    return errors;
}

export default validation;