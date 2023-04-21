import express from "express";
const router = express.Router();
// import passport from 'passport';// midleware authentication 
// import { isLoggedIn, isNotLoggedIn } from '../lib/auth.js';
// -------------------FIREBASE----------------------------------------//
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase.js";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { checkLogin } from "../lib/auth.js";



// router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup',{
//     successRedirect:'/passprofile',
//     failureRedirect:'/signup',
//     // failureFlash:true
// }));


//No show button for signin or signup in App Web
// router.get('/passprofile', isLoggedIn, (req, res) => {
//     res.send("true");
// });
//show button for signin or signup in App Web
// router.get('/nosignin', isNotLoggedIn, (req, res) => {
//     res.send('false');
// });



// ---------------------------------SIGN UP-----------------------------------------

router.post('/signup', async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    console.log(email);
    console.log(password); 
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredentials) {
            console.log('success')
            res.send('Register Success');
        }

    }
    catch (error) {
        // console.log(error);
        if (error.code === 'auth/email-already-in-use') {
            res.send("Email already in use")
        } else if (error.code === 'auth/invalid-email') {
            res.send("Invalid email")
        } else if (error.code === 'auth/weak-password') {
            res.send("Weak password")
        } else if (error.code === 'auth/missing-password') {
            res.send("passsword INVALID")
        }
        else {
            res.send("Something went wrong", "error")
        }
    }
});
//----------------------------------LOGOUT---------------------------------------------
router.get('/logout', async (req, res) => {
    try {
        await signOut(auth)
        console.log("signup out");
        res.send("signup out");
    } catch (error) {
        console.log(error);
        res.send(error);
    }

});
//----------------------------------CHECKLOGIN---------------------------------

router.get('/nosignin', async(req, res) => {
    try {
        const result=await checkLogin();
        res.send(result);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
);
//----------------------------------SIGN IN---------------------------------

router.post('/signin', async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        if (userCredentials) {
            res.send('Login Success');
        }

    } catch (error) {
        if (error.code === 'auth/wrong-password') {
            res.send("Wrong password")
        } else if (error.code === 'auth/user-not-found') {
            res.send("User not found")
        } else {
            res.send("Something went wrong")
        }
    }
});

export default router; 