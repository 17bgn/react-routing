import React from "react";
export default function Login() {
  return (
    <div>
      <form action="validate" method="post">
    
      <h2><u>SignIn Form</u></h2>
      <br></br>
      <label>Email:</label>
      <br></br>
      <input type="email" name="email"></input>
      <br></br><br></br>
      
      <label>Password:</label>
      <br></br>
      <input type="password" name="password"></input>
      <br></br><br></br><br></br>
      <input class="submit" type="submit" value="LOGIN"></input>
      
      </form>
	  </div>
  );
}
