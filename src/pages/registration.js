import React from "react";
export default function Registration() {
  return (
    <div>
		<h2><u>Create Account</u></h2>
		<br></br>
	
		<form action="register" method="post">
		
		<label>Name:</label><br></br>
		<input type="text" name="username"></input>
		<br></br><br></br>
		
		<label>Email:</label><br></br>
		<input type="email" name="email"></input>
		<br></br><br></br>
		
		<label>Password:</label><br></br>
		<input type="password" name="password"></input>
		<br></br><br></br>
		
		<label>Gender:</label><br></br>
		<label class="radio">Male<input type="radio" name="gender" value="male"></input></label>
		<label class="radio">Female<input type="radio" name="gender" value="female"></input></label>
		<label class="radio">Other<input type="radio" name="gender" value="other"></input></label>
		<br></br><br></br>
		
		<label>Role:</label><br></br>
		<label class="radio">Admin<input type="radio" name="role" value="admin"></input></label>
		<label class="radio">Customer<input type="radio" name="role" value="customer"></input></label>
		<br></br><br></br>
		
		<label>Address:</label><br></br>
		<textarea name="address"></textarea>
		<br></br><br></br><br></br>
		
		<input class="submit" type="submit" value="REGISTER"></input>
		</form>
	
	</div>

  );
}
