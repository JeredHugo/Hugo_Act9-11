import React from 'react';

const Login = () => {
  return (
    <div style={styles.loginContainer}>
      <h2 style={styles.heading}>Login</h2>
      <form>
        <div style={styles.inputGroup}>
          <input style={styles.input} type="text" placeholder="Username" />
        </div>

        <div style={styles.inputGroup}>
          <input style={styles.input} type="password" placeholder="Password" />
        </div>

        <button style={styles.button} type="submit">
          Login
        </button>

        <p style={styles.forgotPassword}>
          <a href="#forgot-password">Forgot Password?</a>
        </p>

        <div style={styles.orSeparator}>
          <span style={styles.orText}>Or</span>
        </div>

        <button style={styles.socialButton} type="button">
          Login with Facebook
        </button>

        <button style={styles.socialButton} type="button">
          Login with Google
        </button>
      </form>
      <p style={styles.footerText}>
        Don't have an account? <a href="#signup">Sign up</a>
      </p>
    </div>
  );
};


const styles = {
  loginContainer: {
    textAlign: 'center',
    marginTop: '50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
    background: '#f9f9f9',
    color: '#333',
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
    fontSize: '24px',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '12px',
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
  },
  forgotPassword: {
    textAlign: 'center',
    marginBottom: '15px',
    fontSize: '14px',
    color: '#555',
  },
  orSeparator: {
    margin: '15px 0',
    textAlign: 'center',
    position: 'relative',
  },
  orText: {
    position: 'relative',
    background: '#f9f9f9', 
    padding: '0 10px',
    color: '#777',
    zIndex: '1', 
  },
  orLine: {
    position: 'absolute',
    height: '1px',
    width: '100%',
    top: '50%',
    left: '0',
    backgroundColor: '#ddd', 
    zIndex: '0', 
  },
  socialButton: {
    backgroundColor: '#3b5998',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s',
    display: 'block',
    width: '100%',
  },
  footerText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#777',
  },
};






export default Login;
