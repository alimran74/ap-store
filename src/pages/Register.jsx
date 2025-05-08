import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center min-h-screen items-center bg-purple-100'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Register Your Account</h1>
      <div className="card-body">
        <fieldset className="fieldset">
            {/*Name */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" required/>

            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" required/>

            {/*photo url  */}
          <label className="label">Photo URL</label>
          <input type="text" name="photoURL" className="input" placeholder="Photo URL" required />  

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-6'>Allready have An Account ? <Link className='text-blue-500' to="/auth/login">login</Link></p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Register;