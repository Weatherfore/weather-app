import axios from 'axios';

class AdminService {
    baseUrl= `http://localhost:8086/weather`;

    loginUser(user){
        return axios.post(this.baseUrl + `/user/-/login`, user);
    }
    getUser(rid){
        return axios.get(this.baseUrl+`/getUserById/${rid}`);
    } 
    deleteUser(rid){
        return axios.delete(this.baseUrl+`/deleteUserById/${rid}`)
    }
    updatingUser(user){
        return axios.put(this.baseUrl + `/updateUser`, user);
    }
    
}

export default AdminService;