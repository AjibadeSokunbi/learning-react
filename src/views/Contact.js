import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact us</h1>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

      <form>
        <div>
          <label>Name</label>
        </div>
        <input type="text" />

        <div>
          <label>Email</label>
        </div>
        <input type="email" placeholder="you@gmail.com" />
        <div>
          <label>Message</label>
        </div>
        <textarea rows="10" placeholder="Hi there!" />
      </form>
    </div>
  );
}

export default Contact;