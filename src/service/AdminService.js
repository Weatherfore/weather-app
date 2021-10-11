import axios from 'axios';

class AdminService {
    baseUrl= `http://localhost:8086/weather/admin`;

    loginAdmin(admin){
        return axios.post(this.baseUrl + `/-/login`, admin);
    }
    getAdminById(adminId){
        return axios.get(this.baseUrl+`/getAdmin/${adminId}`);
    }
    getAllAdmin(){
        return axios.get(this.baseUrl+`/getAllAdmin`);
    } 
    deleteAdminById(adminId){
        return axios.delete(this.baseUrl+`/delAdmin/${adminId}`)
    }
    getUser(rid){
        return axios.get(this.baseUrl+`/getUserByIdFromAdmin/${rid}`);
    } 
    deleteUser(rid){
        return axios.delete(this.baseUrl+`/deleteUserByIdFromAdmin/${rid}`)
    }
    getAllUsers(){
        return axios.get(this.baseUrl+`/getAllUsers`);
    }
    updatingAdmin(admin){
        return axios.put(this.baseUrl + `/updateAdmin`, admin);
    }
    
}

export default AdminService;