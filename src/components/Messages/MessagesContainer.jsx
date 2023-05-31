import React from 'react';
import Messages from './Messages';
import { sendMessageActionCreator } from '../Redux/messageReducer';
import withAuthRedirect from '../HOC/withAuthRedirect';
import { useDispatch, useSelector } from 'react-redux';

const MessagesContainer = () => {
  const dispatch = useDispatch();
  const { messagesPage, isAuth } = useSelector((state) => ({
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
  }));

  const addMessage = (newMessageData) => {
    dispatch(sendMessageActionCreator(newMessageData));
  };

  return <Messages state={messagesPage} isAuth={isAuth} addMessage={addMessage} />;
};

export default withAuthRedirect(MessagesContainer);
