import React from 'react';
import PagesLine from "./PagesLine"
import User from './User';


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
        <div>
            {
                users.map(u => <User u={u}
                                    followingInProgress={props.followingInProgress}
                                    key={u.id}
                                    unfollow={props.unfollow}
                                    follow={props.follow}
                    />
                )
            }
        </div>
        <PagesLine currentPage={currentPage} onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount} pageSize={pageSize}/>
</div>
}

export default Users;