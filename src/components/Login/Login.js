import React from 'react'
import './Login.css';
import PropTypes from 'prop-types';

const Login = () => {
    const[username, setUserName] = useState();
    const[password, setPassword] = useState();
  return (
        <div className='login-wrapper'>
            <h2>Login</h2>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text"/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
  )
}

Login.propTypes =  {
    setToken : PropTypes.func.isRequired
}

export default Login