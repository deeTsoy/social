
const FOLLOW =  'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =  {
  users : [
      {id: 1, followed:true, fullName: 'Dmitriy', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 2, followed:true, fullName: 'Oleg', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 3, followed:false, fullName: 'Petr', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 4, followed:true, fullName: 'Domo', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 5, followed:false, fullName: 'Hon See', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 6, followed:false, fullName: 'Dapindar', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, 
                users:state.users.map(user => {
                    if(user.id === action.id){
                        return {...user, followed: true};
                    }
                    return user;
                })}
        }
        case UNFOLLOW: {
            return {
                ...state, 
                users:state.users.map(user => {
                    if(user.id === action.id){
                        return {...user, followed: true};
                    }
                    return user;
                })}
        }
        case SET_USERS: {
            return {...state, users: [...state.users, action.users]};
        }
        default:
            return state;
    };
};

export const followAC = (id) => ({type: FOLLOW});
export const unFollowAC = (id) => ({type: UNFOLLOW});
export const setUsers = (id) => ({type: SET_USERS});
export default usersReducer;