
const FOLLOW =  'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState =  {
  users : [
      {id: 1, photoUrl:'https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg', followed:true, fullName: 'Dmitriy', status: "holla!", location: {city:"Los Angeles", country: "USA"}},
      {id: 2, photoUrl:'https://cms.bitent.com/assets/games/thumbs/mega_anime_avatar_creator_630e38ccc00ad.png', followed:true, fullName: 'Oleg', status: "Living my perfect life!", location: {city:"Los Angeles", country: "USA"}},
      {id: 3, photoUrl:'https://www.pngkey.com/png/detail/572-5723307_kaneki-ken-kanekiken-kaneki-anime.png',followed:false, fullName: 'Petr', status: "Just you and me", location: {city:"Los Angeles", country: "USA"}},
      {id: 4, photoUrl:'https://img.faceyourmanga.com/mangatars/2/78/2078772/large_1882160.png',followed:true, fullName: 'Domo', status: "Became insane!", location: {city:"Los Angeles", country: "USA"}},
      {id: 5, photoUrl:'https://pub-static.fotor.com/assets/projects/pages/e174890b7d614925a4f275b67873ffb7/300w/fotor-01b0203e5e414695890876d329e551d3.jpg',followed:false, fullName: 'Hon See', status: "Bam bam MF", location: {city:"Los Angeles", country: "USA"}},
      {id: 6, photoUrl:'https://pub-static.fotor.com/assets/projects/pages/1bd9e5e88594483ba733ca32245f007f/300w/fotor-39237a95a12545389fcfaf11a1e97c69.jpg',followed:false, fullName: 'Dapindar', status: "deus ex machina", location: {city:"Los Angeles", country: "USA"}},
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