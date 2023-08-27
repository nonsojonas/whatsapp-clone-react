import { useState } from "react";

function ChatForm(props) {
  const [msg, getMsg] = useState("");

  function handleChange (event) {
    getMsg(event.target.value);
  }

  function handleClick (event) {
    event.preventDefault();
    if (msg !== "") {
      props.getNewMsg(msg)
      const textarea = document.getElementById('type-msg');
      textarea.value = '';
      textarea.style.height = "40px";
      getMsg("");
    }
  }

  function textAreaAdjust(event) {
    const textarea = event.target;
    textarea.style.height = 0;
    textarea.style.height = (textarea.scrollHeight) + "px";
  }

  return (
    <div className="chat-msg-form">
      <div className="flex-div">
        <div className="smiley-clip">
          <span className="w-icon fa fa-smile-o"></span>
          <span className="w-icon fa fa-paperclip"></span>
        </div>
        <div className="chat-form">
          <form className="flex-div f-align-center">
            {/* <input onChange={handleChange} type="text" name="type-msg" id="type-msg" placeholder="Type a message" /> */}
            <textarea onInput={textAreaAdjust} onChange={handleChange} name="type-msg" id="type-msg" rows="1" style={{height:"40px",resize:"none",scrollbarWidth:"none",overflow:"hidden"}} placeholder="Type a message"></textarea>
            <button onClick={handleClick} type="submit" name="button"><span className="w-icon fa fa-send"></span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatForm;
