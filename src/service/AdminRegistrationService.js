const validation2 = (admin) => {
    let errors = {};
    if(!admin.adminId){
        errors.adminId = "Admin Id is required."
    }
    if(!admin.adminName){
        errors.adminName = "adminName is required."
    }else if(!/^[a-zA-Z ]{2,40}$/.test(admin.adminName)){
        errors.adminName = "adminName is invalid."
    }
    if(!admin.adminPassword){
        errors.adminPassword = "Password is required."
    }

    return errors;
}

export default validation2;