import React from "react";

function Contact() {
  return (
    <div className="page">
      <h1>Контакты</h1>
      <p>Если у вас есть вопросы — заполните форму:</p>
      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Сообщение" rows={5} required />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;
