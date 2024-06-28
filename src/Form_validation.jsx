import React, { useState } from "react";
import "./style.css"

const Form_validation = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e){
    e.preventDefault();

    if(userName.length > 8){
        setErrorUserName("");
        setUserColor("green");
    }
    else{
        setErrorUserName("User Name must be 8 or more than 8");
        setUserColor("red");
    }


    if(email.includes("@gmail.com")){
        setErrorEmail("");
        setEmailColor("green");
    }
    else{
        setEmailColor("red");
        setErrorEmail("Mention the correct Email");
    }

    if(password.length>8){
        setErrorPassword("");
        setPasswordColor("green");
    }
    else{
        setPasswordColor("red");
        setErrorPassword("The Password must be 8 or more than 8");
    }

    if(password!= "" && password==confirmPassword){
        setErrorConfirmPassword("");
        setConfirmPassword("green");
    }
    else{
        setErrorConfirmPassword("Password Didn't Matched");
        setConfirmPasswordColor("red");
    }

  }

  return (
    <>
      <div className="card">
        <div className="card-image"></div>

        <form>
          <input
            type="text"
            placeholder="Name"
            style={{ borderColor:userColor }}
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
          />

            <p className="error">{errorUserName}</p>

            
            <input
            type="email"
            placeholder="Email"
            style={{ borderColor:emailColor }}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            
            <p className="error">{errorEmail}</p>


            <input
            type="password"
            placeholder="password"
            style={{ borderColor:passwordColor }}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            
            <p className="error">{errorPassword}</p>


            <input
            type="password"
            placeholder="confirm Password"
            style={{ borderColor:confirmPasswordColor }}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            
            <p className="error">{errorConfirmPassword}</p>

            <button className="submit-btn" onClick={validate}>Submit</button>
            
            
            </form>
      </div>
    </>
  );
};

export default Form_validation;
