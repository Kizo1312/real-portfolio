import "./contact.css";
import Button from "../Button";

const Contact = ({ id }) => {
  return (
    <div id={id} className="contact-section">
      <h1>Contact Me!</h1>
      <form action="https://formspree.io/f/mvgalego" method="POST">
        <label htmlFor="name">Enter Your name</label>
        <input type="text" name="name" />

        <label htmlFor="last-name">Enter Your last name</label>
        <input type="text" name="last-name" />

        <label htmlFor="email">Enter Your e-mail</label>
        <input type="email" name="email" />

        <label htmlFor="message">Enter Your name</label>
        <textarea name="message"></textarea>

        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default Contact;
