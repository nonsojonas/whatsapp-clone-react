function ChatReplyMsg(props) {
  const replyBy = ((props.replyBy === "self") ? "your-reply" : "their-reply");

  let noQuote = "";

  if (props.checkForQuote === "yes") {  
    noQuote = " no-quote";
  }

  return (
    <>
    <div className={replyBy+noQuote}>
      <span>
        <span className="chat-msg">{props.replyMsg}</span>
        <span className="msg-time align-right">{props.replyTime}</span>
      </span>
    </div>
    <div className="clear"></div>
    </>
  );
}

export default ChatReplyMsg;
