import React from "react";
import { Link } from 'react-router-dom';
const FreelancerLogin =function({user}){
    return(
        <div>
            {/* Login form */}
            <div>
                <h2>{user}</h2>
                <p>Welcome back! please enter your credentials</p>
            </div>

            <form>
                <div>
                    <label>Email Address</label>
                    <input
                    type="email"
                    required
                    name="email"
                    value={FormData.name}/>
                </div>

                <div>
                    <label>password</label>
                    <input type="password" required value={FormData.password}/>
                </div>
                <p> It must be a combination of letters, numbers and symbols</p>

                <div>
                    <Link to="/forgotPassword">Forgot Password?</Link>
                </div>

                <div>
                    <button>Log In</button>
                    <p>
                        <Link to="/freelancerReistration">Click Here to Register</Link>
                    </p>
                </div>
            </form>

        </div>
    );
}

export default FreelancerLogin;