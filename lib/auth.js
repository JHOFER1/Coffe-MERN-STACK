import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase.js";

export const checkLogin = async () => {
   return new Promise((resolve)=>{
        onAuthStateChanged(auth,(user)=>{
            if (user){
                resolve(true);
            }
            else{
                resolve(false);
            }
        })
   })
};


export const isLoggedIn = async(req, res, next) => {
    const islog=await checkLogin();
    if (islog) {
        console.log(islog)
        return next();
    }else{
        console.log(islog)
        return res.send('No autenticated');
    }
   
};

// export const isNotLoggedIn = (req, res, next) => {
//     if (!req.isAuthenticated()) {
//         return next();
//     }
//     return res.redirect('/passprofile');
// };