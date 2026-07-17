import React, { useState, useRef, useEffect } from "react";
import "./Message.scss";
import { getUsers } from "../../redux/actions/userAction";
import HOC from './../../utils/hoc/HOC';
import { filterMethod, findMethod, firstLetterUpperCase, timeFormate } from "../../helpers/JavascriptMethods";
import { decodeToken } from "../../utils/tokens/TokenStorage";

const conversations = [
  {
    id: 1,
    name: "Meera Nair",
    initials: "MN",
    preview: "Sure, send the files whenever you're ready",
    time: "09:41",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Design Team",
    initials: "DT",
    preview: "Arjun: pushed the new mockups to the drive",
    time: "09:12",
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: "Rahul Verma",
    initials: "RV",
    preview: "Let's sync at 4pm today",
    time: "Yesterday",
    unread: 5,
    online: true
  },
  {
    id: 4,
    name: "Ananya Rao",
    initials: "AR",
    preview: "Thank you so much! 🙏",
    time: "Yesterday",
    unread: 0,
    online: false
  },
  {
    id: 5,
    name: "Product Standup",
    initials: "PS",
    preview: "Reminder: standup moved to 10:30am",
    time: "Mon",
    unread: 0,
    online: false
  }
];

const initialMessages = [
  {
    id: 1,
    from: "them",
    text: "Hey! Did you get a chance to look at the proposal?",
    time: "09:20"
  },
  {
    id: 2,
    from: "me",
    text: "Just opened it now, looks great so far.",
    time: "09:24"
  },
  {
    id: 3,
    from: "them",
    text: "Awesome. Let me know if the timeline on page 3 works for you.",
    time: "09:25"
  },
  {
    id: 4,
    from: "me",
    text: "Page 3 timeline looks tight but doable. I'll confirm with the team.",
    time: "09:30"
  },
  {
    id: 5,
    from: "them",
    text: "Sure, send the files whenever you're ready",
    time: "09:41"
  }
];

function Messages(props) {
  const { dispatch, state } = props;
  const token=decodeToken();

  console.log(token,"token")
  const [activeId, setActiveId] = useState(token?._id);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef(null);

  useEffect(
    () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    },
    [messages]
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const activeConversation = state?.user?.users?.find(c => c._id === activeId);

  console.log(activeConversation,"activeConversation")

  const handleSend = () => {
    if (!draft.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      from: "me",
      text: draft.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    setMessages([...messages, newMessage]);
    setDraft("");
  };

  const handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const userList=filterMethod(state?.user?.users,"_id",token._id,"not");


  const findUser=findMethod(state?.user && state?.user?.users,"_id",token._id);

  console.log(findUser,"findUser")


  return (
    <div className="chat-app">
      <aside className="chat-app__sidebar">
        <div className="chat-app__sidebar-header">
          <span className="chat-app__logo">{firstLetterUpperCase(findUser?.name)}</span>
          <button className="chat-app__icon-btn" aria-label="New message">
            +
          </button>
        </div>

        <div className="chat-app__search">
          <input type="text" placeholder="Search conversations" />
        </div>

        <ul className="chat-app__conversation-list">
          {userList && userList?.map(c =>
            <li
              key={c.id}
              className={
                "chat-app__conversation-item" +
                (c._id === activeId
                  ? " chat-app__conversation-item--active"
                  : "")
              }
              onClick={() => setActiveId(c._id)}
            >
              <div className="chat-app__avatar">
                {/* {c.initials} */}
                <img src={c.avatar} alt="no image" style={{width:"20px",height:"20px"}}/>
                {c.online && <span className="chat-app__status-dot" />}
              </div>
              <div className="chat-app__conversation-info">
                <div className="chat-app__conversation-top">
                  <span className="chat-app__conversation-name">
                    {firstLetterUpperCase(c.name)}
                  </span>
                  <span className="chat-app__conversation-time">
                    {timeFormate(c.createdAt)}
                  </span>
                </div>
                <div className="chat-app__conversation-bottom">
                  <span className="chat-app__conversation-preview">
                    {c.preview}
                  </span>
                  {c.unread > 0 &&
                    <span className="chat-app__badge">
                      {c.unread}
                    </span>}
                </div>
              </div>
            </li>
          )}
        </ul>
      </aside>

      <main className="chat-app__main">
        <header className="chat-app__topbar">
          <div className="chat-app__topbar-user">
            <div className="chat-app__avatar chat-app__avatar--small">
                {/* <img src={activeConversation?.avatar} alt="no image" style={{width:"30px",height:"30px"}}/> */}

              {/* {activeConversation.status &&
                <span className="chat-app__status-dot" />} */}
            </div>
            <div>
              <div className="chat-app__topbar-name">
                {firstLetterUpperCase(activeConversation?.name)}
              </div>
              <div className="chat-app__topbar-status">

                {/* {activeConversation.online ? "Online" : "Offline"} */}
              </div>
            </div>
          </div>
          <div className="chat-app__topbar-actions">
            <button className="chat-app__icon-btn" aria-label="Call">
              ☎
            </button>
            <button className="chat-app__icon-btn" aria-label="Video call">
              ▶
            </button>
            <button className="chat-app__icon-btn" aria-label="Info">
              i
            </button>
          </div>
        </header>

        <div className="chat-app__messages" ref={scrollRef}>
          <div className="chat-app__date-divider">
            <span>Today</span>
          </div>
          {activeConversation?.chat?.map(m =>
            <div
              key={m.id}
              className={
                "chat-app__bubble-row" +
                (m.from === token._id ? " chat-app__bubble-row--me" : "")
              }
            >
              
              <div
                className={
                  "chat-app__bubble" +
                  (m.from === token._id ? " chat-app__bubble--me" : "")
                }
              >
                <p>
                  {m.message}
                </p>
  
                <span className="chat-app__bubble-time">
                  {m.time}
                </span>
              </div>
            </div>
          )}
        </div>

        <footer className="chat-app__input-bar">
          <button className="chat-app__icon-btn" aria-label="Attach file">
            📎
          </button>
          <input
            type="text"
            placeholder="Type a message"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="chat-app__send-btn"
            onClick={handleSend}
            aria-label="Send message"
          >
            ➤
          </button>
        </footer>
      </main>
    </div>
  );
}
export default HOC(Messages);
