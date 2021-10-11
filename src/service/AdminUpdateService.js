const validation2 = (adminData2) => {
    let errors = {};
    if(!adminData2.adminId){
        errors.adminId = "Admin Id is required."
    }
    if(!adminData2.adminName){
        errors.adminName = "adminName is required."
    }else if(!/^[a-zA-Z ]{2,40}$/.test(adminData2.adminName)){
        errors.adminName = "adminName is invalid."
    }
    if(!adminData2.adminPassword){
        errors.adminPassword = "Password is required."
    }

    return errors;
}

export default validation2;