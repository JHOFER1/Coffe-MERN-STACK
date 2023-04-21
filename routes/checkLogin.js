
let checklogin;
onAuthStateChanged(auth, (user) => {

    if (user) {
        checklogin = 'true';
        // console.log(checklogin)
    }
    else {
        checklogin = 'false';
        // console.log(checklogin)
    }
}
);

