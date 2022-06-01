import React from 'react';


function Form() {
    return (
        <div>
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
              </form>
        </div>
    )
}

export default Form;