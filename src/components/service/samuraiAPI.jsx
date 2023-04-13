import axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
}) 
const samuraiAPI = {
        async getUsers(currentPage , pageSize) {
            const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;  
    },

    async deleteId(id){
        const response = await instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        return response;
    },
    async postID(id){
        const response = await instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
        return response;
    }

}

export default samuraiAPI;
