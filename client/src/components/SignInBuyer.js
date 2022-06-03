import React from 'react'
import vinyl from '../images/vinyl.jpg'


function SignInBuyer({handleSignInBuyer, signInMsg}){
  document.querySelector("#myVideo").style.display = 'none';

    return (
        <div id="sign_in_bg">
          <div className="loginbox">
            <img className="avatar" src={vinyl} />
            <h3 id="sign_in_buyer_text">Please Sign In as a Buyer!</h3>
            <form id="sign_in_buyer_form" onSubmit={handleSignInBuyer}>
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
    )
}

export default SignInBuyer