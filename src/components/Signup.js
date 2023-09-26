import React from "react";

const Signup = () => {
  return (
    <div>
      <div class="container">
        <h2>Sign Up</h2>
        <form action="process_signup.php" method="POST">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div class="form-group">
            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
