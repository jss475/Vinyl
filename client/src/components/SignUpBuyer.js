import React from 'react'
import vinyl from '../images/vinyl.jpg'

function SignUpBuyer({handleSignUpBuyer, signInMsg}){
  document.querySelector("#myVideo").style.display = 'none';

    return (
        <div id="sign_up_buyer_bg">
          <div className="loginbox">
            <img  className="avatar" src={vinyl}/> {/* add src to image */}
            
            <h3 id="sign_up_buyer_text">Please Sign Up as a Buyer!</h3>
            <form id="sign_up_buyer_form" onSubmit = {handleSignUpBuyer}> 
              <p>Name</p>
              <input
                name="name"
                type="name"
                placeholder="Enter your full name"
              />
              <p>Username</p>
              <input
                name="username"
                type="username"
                placeholder="Enter your username"
              />
              <p>Password</p>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <button type="submit">Submit</button>
              <br />
              <br />
              <em>{signInMsg}</em>
            </form>
          </div>
        </div>
      );
}

export default SignUpBuyer