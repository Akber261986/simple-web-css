'use client';
import Button from '@/components/Button';

const contactUs = () => {

const handleClick = () => {
        alert('Form Submited');
      };
  return (
    <div className="contactContainer">
      <h1 className="contactHeading">Contact Us</h1>
      <form action="contact" className="formContainer">
        <label htmlFor="name">Name: </label>
        <input 
        type="text"
        placeholder='Enter your name'
        />
        <label htmlFor="email">E-mail: </label>
        <input 
        type={'email'}
        placeholder='Enter your E-mail'
        required
        />
        <label htmlFor="message">Message: </label>
        <textarea
        id='message'
        rows={6}
        placeholder='Enter your message'
        />
      </form>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  )
}

export default contactUs
