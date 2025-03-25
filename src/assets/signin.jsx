import React from 'react';

function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}


export default SignIn;
