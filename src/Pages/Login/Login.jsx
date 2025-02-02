import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = credentials;
    try {
      // Sending a GET request with query parameters
      const response = await axios.get('http://localhost:5000/api/login', {
        params: { username, password },
      });

      // Assuming the API sends a response with a "success" key
      if (response.data.success) {
        alert('Login successful!');
      } else {
        alert('Invalid username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <main style={styles.main}>
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={styles.wrapper}>
              <form style={styles.form} onSubmit={handleSubmit}>
                <h1 style={styles.heading}>Login</h1>
                <div style={styles.inputGroup}>
                  <label htmlFor="username" style={styles.label}>Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <div style={styles.inputGroup}>
                  <label htmlFor="password" style={styles.label}>Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  />
                </div>
                <button type="submit" style={styles.button}>Login</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

const styles = {
  main: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f9ff',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
    transition: 'border 0.3s',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Login;
