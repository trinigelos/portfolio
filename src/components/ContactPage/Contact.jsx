import React from 'react';
import './Contact.css';

const ContactForm = () => {
return (
<div className="contact-form-container">
  <div className="left">
    <h2 className='lets'>let's</h2>
    <h2 className="get">get in </h2>
    <h2 className='touch'>touch</h2>
  </div>

  <div className='right'>
    <div className="field">
      <input type="text" name="" id="" placeholder="Full Name" />
      <div className="line"></div>
    </div>
    <div className="field">
      <input type="email" name="" id="" placeholder="Email Address" />
      <div className="line"></div>
    </div>
    <div>
      <textarea className="placeholder" name="message line" id="" rows="4" placeholder="Write your message here..."></textarea>
      <div className="line"></div>
    </div>
    <button className="bn13" type="submit">
      Send
    </button>
  </div>
</div>
);
};

export default ContactForm;