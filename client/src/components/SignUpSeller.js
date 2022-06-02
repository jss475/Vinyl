import React from 'react'

function SignUpSeller({handleSignUpSeller, signInMsg}){
  document.querySelector("#myVideo").style.display = 'none';

    return (
        <div id="sign_up_seller_bg">
          <div className="loginbox">
            <img  className="avatar" /> {/* add src to image */}
            
            <h3 id="sign_up_seller_text">Please Sign Up as a Seller!</h3>
            <form id="sign_up_seller_form" onSubmit = {handleSignUpSeller}> 
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

export default SignUpSeller