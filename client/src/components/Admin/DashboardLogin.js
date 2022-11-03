import React, {useState} from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3000/auth/token', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const DashboardLogin = ({setAuthToken}) => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        setAuthToken(token)
    }
 
    return (
        <main className="form-signin container-sm position-absolute top-50 start-50 translate-middle">
            <a href='/'><h3 className='text-dark fs-4 my-5 text-decoration-none'><strong>Volver al home page</strong></h3></a>
            <form className='mx-auto col-md-6 col-xl-4 mt-5' onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Admin login</h1>
                <div className="form-floating my-2">
                    <input type="text" className="form-control" id="user" placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating my-2">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary  my-2" type="submit">Log in</button>
            </form>
        </main>
    )
}

DashboardLogin.propTypes = {
    setAuthToken: PropTypes.func.isRequired
}

export default DashboardLogin;