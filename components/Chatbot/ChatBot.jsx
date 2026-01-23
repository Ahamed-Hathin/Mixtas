import React from 'react'
import { use } from 'react'
import { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import typingAnimation from '../../assets/Robot.json'

const ChatBot = () => {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [message, setMessage] = useState([])
  const [typing, setTyping] = useState(false)

  const sendMessage = async () => {
    if (!input) return;

    // USER message
    setMessage((prev) => [...prev, { text: input, sender: "user" }]);
    const userText = input;
    setInput("");

    setTyping(true);

    try {
      const res = await fetch(
        "https://chatgpt-42.p.rapidapi.com/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
            "X-RapidAPI-Host": "chatgpt-42.p.rapidapi.com",
          },
          body: JSON.stringify({
            messages: [
              {
                role: "system",
                content: `
You are a fashion assistant for Mixtas.
Store timing: 10:00 AM to 9:00 PM.
Reply short.
`,
              },
              {
                role: "user",
                content: userText,
              },
            ],
            model: "gpt-4o-mini",
          }),
        }
      );

      const data = await res.json();
      const aiReply =
        data.choices?.[0]?.message?.content || "AI did not reply";

      // BOT message
      setMessage((prev) => [...prev, { text: aiReply, sender: "bot" }]);
    } catch {
      setMessage((prev) => [...prev, { text: "AI error", sender: "bot" }]);
    }

    finally {
      setTyping(false);
    }
  };



  return (
    <div className='Chat-Conatiner'>
      <button className='btn chat-btn '
        onClick={() => setOpen(!open)}><i class="fa-solid fa-comment "></i></button>

      {
        open && (
          <div className="chat-bot  d-flex flex-column"><span className='chat-heading'>ChatBot</span>
            <div className="chat-messages flex-grow-1">
              {message.map((msg, index) => (
                <div key={index} className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`} >
                  {msg.text}
                </div>
              ))}
            </div>



            {typing && (
              <div className=" typing-dots  text-start">
                <Player
                  autoplay
                  loop
                  src={typingAnimation}
                  style={{ width: 66, height: 66 }}
                />
              </div>
            )}


            <input type="text"
              placeholder='Ask Anything...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />


          </div>



        )

      }

    </div>
  )
}

export default ChatBot