import React, { useState } from 'react';
import './App.css';
let usernameRegex = /^[a-zA-Z0-9_]{5,20}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/;
let nameRegex = /^[a-zA-Z]{3,12}(?: [a-zA-Z]{3,12})*$/;
let surnameRegex = /^[a-zA-Z]{3,12}(?:[-'a-zA-Z]{3,12})*$/; 

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsUsernameValid(usernameRegex.test(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(passwordRegex.test(value));
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(nameRegex.test(value));
  };

  const handleSurnameChange = (e) => {
    const value = e.target.value;
    setSurname(value);
    setIsSurnameValid(surnameRegex.test(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const usernameIsValid = usernameRegex.test(username);
    const emailIsValid = emailRegex.test(email);
    const passwordIsValid = passwordRegex.test(password);
    const nameIsValid = nameRegex.test(name);
    const surnameIsValid = surnameRegex.test(surname);

    setIsUsernameValid(usernameIsValid);
    setIsEmailValid(emailIsValid);
    setIsPasswordValid(passwordIsValid);
    setIsNameValid(nameIsValid);
    setIsSurnameValid(surnameIsValid);

    if (usernameIsValid && emailIsValid && passwordIsValid && nameIsValid && surnameIsValid) {
      alert('Form Sent Success!');
    } else {
      alert('Form Is Wrong.');
    }
  };
  function CheckInput() {
    return (
        <div style={{color:'red'}}>
            Enter All Empty Column
        </div>)
}
  return (
    <div className="App">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username (5-20)"
          />
          {!isUsernameValid && username && <p style={{ color: 'red' }}>Invalid Username</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          {!isEmailValid && email && <p style={{ color: 'red' }}>Invalid Email.</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password (Least 8 Character Use _, no special symbol)"
          />
          {!isPasswordValid && password && <p style={{ color: 'red' }}>Invalid Password.</p>}
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name (Only Alphabet)"
          />
          {!isNameValid && name && <p style={{ color: 'red' }}>Invalid Name</p>}
        </div>

        <div>
          <label>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={handleSurnameChange}
            placeholder="Surname"
          />
          {!isSurnameValid && surname && <p style={{ color: 'red' }}>Invalid Surname.</p>}
        </div>
        <button type="submit" style={{marginTop:'7px',backgroundColor:'gray'}}>Send</button>
      </form>
      {(username === '' || email === '' || password === '' || name === '' || surname === '') && CheckInput()}
    </div>
  );
}

export default App;