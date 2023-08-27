import ProfilePhoto from './ProfilePhoto';
import ChatMsgs from './ChatMsgs';
import ChatForm from './ChatForm';

function Chat(props) {
  const currentDate = new Date().toLocaleDateString().replace(/\//g,"-");
  let hours = new Date().getHours(); 
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12 || 12; 
  let minutes = new Date().getMinutes();
  if (minutes < 9) {minutes = "0"+minutes}
  const currentTime = hours+":"+minutes+" "+ampm;

  const you = props.you;
  const activeUserData = props.activeUserData;
  let getActiveUserMsgData = props.getActiveUserMsgData;
  const newMsgDataState = props.newMsgDataState;
  
  const activeUserMsgDataCount = getActiveUserMsgData.length;
  const newMsgCount = newMsgDataState.length;
  const lastId = activeUserMsgDataCount + newMsgCount + 1;
  
  const getNewMsg = (msg) => {
    const newMsgData = {
      id: lastId,
      msgFrom: you,
      msgTo: props.activeUserData.id,
      msg: msg,
      time: currentTime,
      date: currentDate,
      readStatus: "unread",
    }
    props.setNewMsg(prevMsgs => {
      return [...prevMsgs, newMsgData];
    });
  }
  
  if (newMsgDataState.length !== 0) {
    getActiveUserMsgData = [...getActiveUserMsgData, ...newMsgDataState];
  }

  const showChat = ((props.showChat === "no") ? " none" : "");
  
  return (
    <div className={"col-sm-9 chat-right-2 padding-0"+showChat}>
      <div className="row chat-msg-top">
        <div className="col-2">
          <ProfilePhoto imgSrc={activeUserData.imgSrc}/>
        </div>
        <div className="col-7">
          <span className="block chat-user bold">{activeUserData.name}</span>
          <span className="block status small">Online</span>
        </div>
        <div className="col-3 chat-msg-icons align-right">
          <span className="w-icon fa fa-chevron-left cursor" onClick={() => {props.escape();}}></span>
        </div>
      </div>

      <div id="chat-msg-body" className="chat-msg-body scroll-div">
        <ChatMsgs getActiveUserMsgData={getActiveUserMsgData} you={you} />
      </div>

      <ChatForm getNewMsg={getNewMsg} />
    </div>
  );
}

export default Chat;
