import React from 'react'
import './SendMsg.css'
const SendMsg = () => {
  return (
    <>
      <section className="sendmsg">
        <div className="container">
          <div className="sendmsg_wrapper">
             <div>
             <h1>Подпишитесь и будьте в курсе!</h1>
              <p>Акции, скидки, распродажи ждут!</p>
              <input type="text" placeholder='Введите email' />
              <button>Подписаться</button>
             </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SendMsg
