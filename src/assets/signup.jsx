import React from 'react';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}


export default SignUp;
