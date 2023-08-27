import ProfilePhoto from './ProfilePhoto';

function UserSelect(props) {

  function handleSetActive () {
    props.setActiveUser(props.id);
  }

  const activeUser = ((props.activeUser === "yes") ? " active" : "");

  return (
    <div onClick={handleSetActive} className={"row list cursor"+activeUser}>
      <div className="col-2">
        <ProfilePhoto imgSrc={props.userImg}/>
      </div>

      <div className="col-10 name-msg">
        <div className="row">
          <div className="user-name col-6">{props.name}</div>
          <div className="chat-time inline-block small align-right col-6">{props.lastMsgTime}</div>
        </div>
        <span className="block last-msg">{props.lastMsg}</span>
      </div>
    </div>
  );
}

export default UserSelect;
