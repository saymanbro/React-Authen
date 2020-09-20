import React, { useContext, useState } from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../../firebase-config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig)


const Login = () => {
 
  const [loggedUser, setLoggedUser] = useContext(UserContext)
 const history = useHistory();
 const location = useLocation()
const  { from } = location.state || { from: {pathname:'/'}}
    const [newUser, setNewUser] = useState(false)
         const [user, setUser] = useState({
             name:'',
             email:'',
             password:'',
             error:'',
             success:false
         })
         const handleFbLogIn = () => {
            firebase.auth().signInWithPopup(FbProvider).then(function(result) {
                var token = result.credential.accessToken;
                const {displayName,email} = result.user;
               const signedInUser = {displayName, email}
                setLoggedUser(signedInUser)
                history.replace(from)
              
              }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
              console.log(errorMessage, errorCode);
               
              });
        }

            // Facebook Validation Code //

    const FbProvider = new firebase.auth.FacebookAuthProvider();
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
       firebase.auth().signInWithPopup(provider)
       .then(res => {
           console.log(res);
       })
    }
    // Email & Password Validation Function //
    const handleChange = (e) => {
       let isFormValid = true
        if(e.target.name === 'email'){
         isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
       
        }
        if(e.target.name === 'password'){
        const isPasswordValid = e.target.value.length > 6;
        const passwordHasNumber = /\d{1}/.test(e.target.value);
        isFormValid = isPasswordValid && passwordHasNumber;
        }
        if(isFormValid){
            const newUserInfo = {...user}
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)

        }

    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
            .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
            })
            .catch(error => {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)
              });
        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email,user.password)
            .then(res => {
                const newUserInfo = {...user}
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
            })
            .catch(error=> {
                const newUserInfo = {...user}
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)
              });
        }
        e.preventDefault()
    }

    return (
        <div className='logIn'>
     <div className='log'>
     <h1>Log In</h1>
                <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)}/>
                <label htmlFor="newUser">New User Sign Up</label>
                <form onSubmit={handleSubmit}>
                   { newUser && <input type="text" name='name' placeholder='Enter Your Name' required/>
                    } 
                    <br/>
                
                    <input type="text" name='email' placeholder='Email' required onBlur={handleChange}/>
                    <br/>
                    <input type="password" name='password' placeholder='Password' required onBlur={handleChange}/>
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
     </div>
                
                <br/>
            <p style={{color:'red'}}>{user.error}</p>
            {user.success &&      <p style={{color:'green'}}>User {newUser ?'Created': 'Logged In'} successfully</p>}

           <Button onClick={handleGoogleSignIn} variant='contained' color='secondary'>  Sign IN With Google</Button>
           <br/>
           <br/>
           <Button onClick={handleFbLogIn} variant='contained' color='primary'>Sign In With Facebook</Button>
        </div>
    );
};

export default Login;