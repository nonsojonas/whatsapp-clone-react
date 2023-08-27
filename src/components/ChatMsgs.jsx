import ChatReplyMsg from './ChatReplyMsg';

const currentDate = new Date().toLocaleDateString().replace(/\//g,"-");

const ChatMsgs = (props) => {
  const you = props.you;
  const getActiveUserMsgData = props.getActiveUserMsgData;
  
  const groupMsgByDate = getActiveUserMsgData.reduce((grouped, msgDataByDate) => {
    const date = msgDataByDate.date;
    if (!grouped[date]) {
      grouped[date] = [];
    }
    grouped[date].push(msgDataByDate);
    return grouped;
  }, {});

  return (
    <>
      {Object.keys(groupMsgByDate).map((date) => (
        <div key={date}>
          <p className="align-center msg-date">{(currentDate === date) ? "Today" : date}</p>
          {groupMsgByDate[date].map((msgDataByDate, index) => {
            let checkForQuote = "";
            if (index > 0 && msgDataByDate.msgFrom === groupMsgByDate[date][index - 1].msgFrom) {checkForQuote = "yes"}else {checkForQuote = "no"}
            return (
              <ChatReplyMsg checkForQuote={checkForQuote} key={msgDataByDate.id} replyBy={((msgDataByDate.msgFrom === you) ? "self" : "")} replyMsg={msgDataByDate.msg} replyTime={msgDataByDate.time}/>
            )}
          )}
        </div>
      ))}
    </>
  );
};

export default ChatMsgs;
