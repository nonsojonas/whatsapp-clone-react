import UserSelect from './UserSelect';
import ProfilePhoto from './ProfilePhoto';
import userListData from '../data/userListData';
import userMsgData from '../data/userMsgData';

const fetchUsers = (fetchUser,activeUser,you,setActiveUser,welcomeState) => {
  const fetchUserId = fetchUser.id;
  const fetchUserName = fetchUser.name;
  const fetchUserImgSrc = fetchUser.imgSrc;
  const activeUserCheck = ((fetchUserId === activeUser && welcomeState === "no") ? "yes" : "");

  const getLastData = userMsgData.filter(msgData => ((msgData.msgFrom === fetchUserId && msgData.msgTo === you) || (msgData.msgFrom === you && msgData.msgTo === fetchUserId)));
  if (getLastData.length > 0) {
    const lastData = getLastData[getLastData.length - 1];
    const lastMsgTime = lastData.time;
    let lastMsg = lastData.msg;
    
    if (lastMsg.length > 30) lastMsg = lastMsg.substring(0,30)+"...";
    
    return (
      <UserSelect key={fetchUserId} id={fetchUserId} activeUser={activeUserCheck} name={fetchUserName} lastMsgTime={lastMsgTime} lastMsg={lastMsg} userImg={fetchUserImgSrc} setActiveUser={setActiveUser} />
    );
  }
}

function UserList(props) {  
  const setYouActive = () => {
    props.setActiveUser(props.you)
  }

  let showUserList = props.userListState ? "" : " none";

  return (
    <div className={"col-sm-3 chat-left padding-0"+showUserList}>
      <div className="row user-top padding-10">
        <div className="col-5">
          <div className="desktop-view">
            <span className="cursor" onClick={setYouActive}>
              <ProfilePhoto imgSrc={props.yourPhoto}/>
            </span>
          </div>
          <div className="mobile-view">
            <span className="w-title bold w3-large padding-10 block">WhatsApp Clone</span>
          </div>
        </div>
        <div className="col-7 user-top-icons align-right">
          <div className="desktop-view">
            <span className="w-icon fa fa-group"></span>
            <span className="w-icon fa fa-circle-o"></span>
            <span className="w-icon fa fa-inbox"></span>
            <span className="w-icon fa fa-ellipsis-v"></span>
          </div>
          <div className="mobile-view">
            <span className="w-icon fa fa-search"></span>
            <span className="w-icon fa fa-ellipsis-v"></span>
          </div>
        </div>
      </div>
      <div className="user-top-nav mobile-view">
        <span className="inline-block w-heading bold small">CHATS <span className="badge radius-circle">{props.unreadMsgs}</span></span>
      </div>

      <div className="user-search padding-10 desktop-view">
        <form action="" method="post">
          <div className="row">
            <div className="col-2 padding-0">
              <button type="button" id="search" name="search"><i className="fa fa-search"></i></button>
            </div>
            <div className="col-10 padding-0">
              <input type="text" id="search-imput" name="search-imput" placeholder="Search or start new chat"/>
            </div>
          </div>
        </form>
      </div>

      <div className="user-list scroll-div">
        {userListData.map(list => fetchUsers(list, props.activeUser, props.you, props.setActiveUser, props.welcomeState))}
      </div>
    </div>
  );
}

export default UserList;
