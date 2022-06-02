import React from 'react'

function SignInSeller({handleSignInSeller, signInMsg}){
  document.querySelector("#myVideo").style.display = 'none';

    return (
        <div id="sign_in_bg">
          <div className="loginbox">
            <img className="avatar" />
            <h3 id="sign_in_seller_text">Please Sign In as a Seller!</h3>
            <form id="sign_in_seller_form" onSubmit={handleSignInSeller}>
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

export default SignInSeller