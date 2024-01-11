import React, { useState, useEffect } from "react";

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Handle form submission logic here
        console.log('Form submitted:', form);
      };
    

  return (
    <>
       <div className="copywriter-form-div">
      <div className="names-container-form">
        <div className="form-container">
          <form
            id="contact-form-inline"
            className="contact-form-2020 contact-form-to-submit"
            onSubmit={handleSubmit}
          >
            <p className="header-text">
              Napisz kilka słów o swoim projekcie
              <br />
              i otrzymaj
              <span className="texts-green-color texts-green-bold">niezobowiązującą</span> ofertę. <br />
            </p>
            <input name="url" type="hidden" value="www.copywriting.pl/copywriter?_gl=1*1t73nrx*_ga*NTcxNDcyOTE2LjE3MDQ0NjA4ODQ.*_ga_MQBNYFQ4HW*MTcwNDk1NjcwNi4zMC4xLjE3MDQ5NTgxMzcuMC4wLjA." />
            <input name="time" type="hidden" value="0" />
            <input name="session-start" type="hidden" value="1704948386" />

            <div className="contact-inputs">
              <div className="contact-input contact-input2 input-parent input-parent-new-form">
                <input
                  type="text"
                  name="name"
                  className="form-input-text name-input"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <span className="prog-bar-bg"></span>
                <span className="prog-bar"></span>
                <span className="input-placeholder">Imię:</span>
              </div>
              <div className="contact-input contact-input2 input-parent input-parent-new-form">
                <input
                  type="email"
                  name="email"
                  className="form-input-text mail-input"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
                <span className="prog-bar-bg"></span>
                <span className="prog-bar"></span>
                <span className="input-placeholder">Mój email to:</span>
              </div>
              <div className="contact-input input-parent input-parent-new-form">
                <input
                  type="text"
                  name="phone"
                  className="form-input-text tel-input"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                />
                <span className="prog-bar-bg"></span>
                <span className="prog-bar"></span>
                <div className="input-placeholder">Tel.<span className="input-italic input-name-form"> <span className="form-opcjonalnie">Opcjonalnie</span></span></div>
              </div>
              <div className="clearfix"></div>
            </div>
            
            <div className="contact-input contact-input-textarea input-parent input-parent-new-form msg-input">
              <textarea
                name="message"
                required
                onKeyUp={handleChange}
                className="form-input-text form-input-msg form-inline-textarea"
                value={form.message}
              ></textarea>
              <span className="prog-bar-bg"></span>
              <span className="prog-bar"></span>
              <div className="input-placeholder">Napisz kilka słów o swoim projekcie</div>
            </div>
            
            <div className="clearfix"></div>
            <div className="contact-submit-button">
              <button className="contact-form-btn" type="submit">Wyślijcie mi
                niezobowiązującą ofertę</button>
              <div className="contact-form-btn-bg"></div>
              <div className="contact-submit-button-shield"></div>
            </div>
            <div className="form-footer-error"></div>
            <input name="form[tid]" type="text" id="tid-inline" className="tid" value="" style={{ display: 'none' }} />
            <input name="form[cid]" type="text" id="cid-inline" className="cid" value="" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Form;
