function ChatWelcome(props) {
  const showWelcome = ((props.showWelcome === "no") ? " none" : "");

  return (
    <div className={"col-sm-9 chat-right"+showWelcome}>
      <div className="chat-welcome align-center">
        <i className="fa fa-whatsapp"></i>
        <h1>WhatsApp Clone</h1>
        <p className="desc">Send and recieve messages without keeping your phone online. <br/> Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</p>
        <p className="end2end"><i className="fa fa-lock"></i> End-to-end encrypted</p>
      </div>
    </div>
  );
}

export default ChatWelcome;
