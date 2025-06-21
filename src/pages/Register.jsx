import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser , setUser}=use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        // console.log({name, email, photoURL, password});
          //  Password validation 
  if (!/[A-Z]/.test(password)) {
    toast.error("❌ Password must contain at least one uppercase letter");
    return;
  }
  if (!/[a-z]/.test(password)) {
    toast.error("❌ Password must contain at least one lowercase letter");
    return;
  }
  if (password.length < 6) {
    toast.error("❌ Password must be at least 6 characters long");
    return;
  }
        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            // console.log(user);
            updateProfile(user,{
                displayName: name,
                photoURL:photoURL,
            }).then(()=>{
                setUser({...user, displayName:name,
                    photoURL: photoURL
                });
                toast.success('Account created Successfully')
            })
        })
        .catch((error) =>{
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`❌ ${errorMessage}`)
        })
        
        
         
    }
    return (
        <div className='flex justify-center min-h-screen items-center bg-purple-100'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className='font-semibold text-2xl text-center py-5'>Register Your Account</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            {/*Name */}
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" required/>

            {/* email */}
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" required/>

            {/*photo url  */}
          <label className="label">Photo URL</label>
          <input  type="text" name="photoURL" className="input" placeholder="Photo URL" required />  

          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-6'>Allready have An Account ?{' '} <Link className='text-blue-500' to="/auth/login">login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;