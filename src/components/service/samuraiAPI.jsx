import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
}) 
const samuraiAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    deleteId(id){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    postID(id){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    },
    auth(){
        return instance.get(`/auth/me`)
    },
    getProfile(userId){
        return instance.get(`/profile/`+ userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`profile/status/`, {status: status})
    },
    logIn(email, password, rememberMe = false){
        return  instance.post('/auth/login', {email, password, rememberMe} )
    },
    logOut(email, password, rememberMe = false){
        return  instance.delete ('/auth/login', {email, password, rememberMe} )
    }
}

export default samuraiAPI;
