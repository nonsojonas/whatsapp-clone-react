import { useState } from "react";
import userListData from '../data/userListData';
import userMsgData from '../data/userMsgData';
import UserList from './UserList';
import ChatWelcome from './ChatWelcome';
import Chat from './Chat';

function Home() {
  const you = userListData[0].id;
  const yourPhoto = userListData[0].imgSrc;

  const [userListState, setUserListState] = useState(true);

  const [welcomeState, setWelcomeState] = useState("yes");

  const escape = () => {
    setActiveUserState(you);
    setWelcomeState("yes");
    setUserListState(true);
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      escape();
    }
  });

  const [newMsgDataState, setNewMsgState] = useState([]);
  const setNewMsg = (newMsg) => {
    setNewMsgState(newMsg);
  }

  const [activeUser, setActiveUserState] = useState(you);
  const setActiveUser = (activeUserId) => {
    setActiveUserState(activeUserId);
    setNewMsgState([]);
    setWelcomeState("no");
    setUserListState(false);
  }

  let showWelcome = "yes";
  let showChat = "no";

  if (welcomeState !== "yes") {
    showWelcome = "no";
    showChat = "yes";
  }

  const activeUserData = userListData.find(userData => userData.id === activeUser);
  const getActiveUserMsgData = userMsgData.filter(msgData => ((msgData.msgFrom === activeUser && msgData.msgTo === you) || (msgData.msgFrom === you && msgData.msgTo === activeUser)));

  const getUnreadMsgs = userMsgData.filter(userData => userData.msgTo === you && userData.readStatus === "unread");
  const unreadMsgs = getUnreadMsgs.length;

  return (
    <div className="bg-color color">
      <div className="container-fluid chat">
        <div className="row">
          <UserList welcomeState={welcomeState} userListState={userListState} you={you} activeUser={activeUser} unreadMsgs={unreadMsgs} yourPhoto={yourPhoto} setActiveUser={setActiveUser} />
          <ChatWelcome showWelcome={showWelcome} />
          <Chat showChat={showChat} escape={escape} setNewMsg={setNewMsg} newMsgDataState={newMsgDataState} you={you} activeUserData={activeUserData} getActiveUserMsgData={getActiveUserMsgData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
