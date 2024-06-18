

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './Chat.css';

const Chat = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [time, setTime] = useState()
  const [click, setClick] = useState(null)
  const [date, setDate] = useState()
  // const [emoji, setEmoji] = useState()
  const location = useLocation();
  const { current } = location.state;

  useEffect(() => {
    // let currentdate = new Date().toLocaleDateString()
    let today = new Date();
    let currenTime = today.toLocaleTimeString();

    setTime(currenTime)
    console.log(currenTime)
  }, [] )


  useEffect(() => {
    // let currentdate = new Date().toLocaleDateString()
    let today = new Date();
    let currenTime = today.toLocaleDateString();

    setDate(currenTime)
  }, [])

  // useEffect(() => {
  //   var emoj = emojione.toShort("👩‍💻");
  //   setEmoji(emoj)
  // }, [])



  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('chat_history')) || [];
    setData(localData);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    const newMessage = { name: current, chat: value, time: time };
    const updatedData = [...data, newMessage];
    setData(updatedData);
    setValue('');
    localStorage.setItem('chat_history', JSON.stringify(updatedData));
  };

  let handledelete = (index) => {
    setClick(index)
  }


  let cancelDelete = () => {
    setClick(null)
  }

  let confrimdelete = () => {
    const del = data.filter((_, i) => i !== click)
    setData(del)
    localStorage.setItem('chat_history', JSON.stringify(del));

    setClick(null)

  }

  // let handledelete = (index) => {
  //   const del = data.filter((_, i) => i !== index)
  //   setData(del)
  //   localStorage.setItem('chat_history', JSON.stringify(del));
  // }

  return (
    <div className="chatmain">
      <div className="chatbox">
        <div className='groupchat'>Group Chat</div>
        <div>{date}</div>
        {data.map((item, index) => (
          <div key={index} className="message">
            <span onDoubleClick={() => handledelete(index)} className={item.name === current ? 'sent-message' : 'received-message'} id='sending' >
              <span className='name'><b>{item.name}</b></span><br></br>
              <span className='chat'>{item.chat}</span><br></br>
              <span className='time'>{item.time}</span>
            </span>
          </div>
        ))}

        {click !== null && (
          <div className='delete'>
            <p>Are you sure you want to delete this message</p>
            <button onClick={confrimdelete} className='confrimdelete'>Delete</button>
            <button onClick={cancelDelete} className='cancel'>cancel</button>
          </div>
        )}
        <div className="input-container">
          <input
            className="chatinput"
            type='text'
            value={value}
            onChange={handleChange}
            placeholder="Type your message..."
          />
          <button className="send-button" onClick={handleSend}>Send</button>
        </div>
      </div>
    </div >
  );
};

export default Chat;





// 💗
