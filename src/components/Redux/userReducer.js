import samuraiAPI from "../service/samuraiAPI";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}


export const followSuccess = (userId) => ({type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })
export const setUsers = (users) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
      dispatch(toggleIsFetching(true));
      dispatch(setCurrentPage(currentPage))
      try {
        const data = await samuraiAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
      } catch (error) {
        console.log(error);
        dispatch(toggleIsFetching(false));
      }
    };
  };
  

  const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator ) =>{
    dispatch(toggleIsFollowingProgress(true, id));
    try {
        let response = await apiMethod(id);
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(id));
        }
    } catch (error) {
            console.log(error);
          }
    dispatch(toggleIsFollowingProgress(false, id));
  }
  export const follow = (id) => {
    return async (dispatch) => {
      followUnfollowFlow(dispatch, id, samuraiAPI.follow.bind(samuraiAPI), followSuccess)
    };

  };
  
  export const unfollow = (id) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, id, samuraiAPI.unFollow.bind(samuraiAPI), unfollowSuccess)
    };
  };
  


export default usersReducer;