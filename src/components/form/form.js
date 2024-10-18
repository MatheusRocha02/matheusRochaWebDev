import React, { useState } from "react";
import "./form.css";
import emailjs from 'emailjs-com';

const Form = () => {
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_kbgykvr', 'template_3chqwvv', e.target, 'uQgWLt3npENP13mTl')
            .then((result) => {
                setMessageSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div className="form-container" id="contact">
            {messageSent ? (
                <h2 className="success-message">Mensagem enviada, obrigado pelo contato ;)</h2>
            ) : (
              <form onSubmit={sendEmail}>
                <h1 className="form-title">
                  <p>Fale</p>
                  <p>comigo</p>
                </h1>
                <div>
                  <label>Nome *: </label>
                  <input type="text" name="name" required/>
                </div>
                <div>
                  <label>E-mail: *</label>
                  <input type="email" name="email" required/>
                </div>
                <div>
                  <label>Mensagem: *</label>
                  <textarea name="message" required/>
                </div>
                <div className="btns-div">
                  <button type="reset" className="reset-btn">Limpar</button>
                  <button type="submit" className="submit-btn">Enviar</button>
                </div>
              </form>
            )}
        </div>
    );
};

export default Form;
