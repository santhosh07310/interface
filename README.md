<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        body {
            font-family: sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }

        .login-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }

        .login-container h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
        }

        .form-group input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .form-group button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
        }

        .form-group button:hover {
            background-color: #45a049;
        }

        .error-message{
          color: red;
          font-size: 0.8em;
          margin-top: 5px;
          display: none;
        }

    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required>
                <div class="error-message" id="usernameError"></div>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
                <div class="error-message" id="passwordError"></div>
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple client-side validation (replace with proper server-side validation)
            let hasErrors = false;
            if (!username) {
                document.getElementById('usernameError').textContent = "Username is required";
                document.getElementById('usernameError').style.display = "block";
                hasErrors = true;
            } else {
              document.getElementById('usernameError').style.display = "none";
            }
            if (!password) {
                document.getElementById('passwordError').textContent = "Password is required";
                document.getElementById('passwordError').style.display = "block";
                hasErrors = true;
            } else {
              document.getElementById('passwordError').style.display = "none";
            }

            if (hasErrors) {
                return; // Stop further processing if there are errors
            }

            // Simulate login (replace with actual authentication logic)
            if (username === 'test' && password === 'password') {
                alert('Login successful!');
                // Redirect to another page or perform other actions
            } else {
                alert('Invalid username or password.');
            }
        });
    </script>
</body>
</html>
