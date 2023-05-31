import React, { useEffect } from 'react';
import Users from './Users';
import Loader from '../loader/loader';
import { useSelector, useDispatch } from 'react-redux';
import { follow, unfollow, getUsers } from '../Redux/userReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';

const UsersContainer = () => {
  const dispatch = useDispatch();
  const {
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFetching,
    followingInProgress
  } = useSelector((state) => state.usersPage);

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize));
  }, [dispatch, currentPage, pageSize]);

  const onPageChanged = (pageNumber) => {
    dispatch(getUsers(pageNumber, pageSize));
  };

  const handleFollow = (userId) => {
    dispatch(follow(userId));
  };

  const handleUnfollow = (userId) => {
    dispatch(unfollow(userId));
  };

  return (
    <>
      {isFetching ? <Loader /> : null}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        users={users}
        follow={handleFollow}
        unfollow={handleUnfollow}
        followingInProgress={followingInProgress}
      />
    </>
  );
};

export default compose(withAuthRedirect)(UsersContainer);
