import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const signupApi = (data) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                ;;
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    console.log(user);
                    sendEmailVerification(auth.currentUser)
                        .then(() => {
                            resolve({ payload: "check your email" });

                        })
                        .catch((e) => {
                            reject({ payload: e });
                        })
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "this email is already exist" });
                } else {
                    reject({ payload: errorMessage });
                }
                // console.log(errorCode,errorMessage); 
            });
    })

}

export const signInApi = (data) => {
    console.log("signInApi", data);

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => { 
                const user = userCredential.user;
                console.log(user);

                if(user.emailVerified){
                    reject({payload:"Email or Password is Wrong"});
                    // console.log("Email or Password is Wrong");
                }else{
                    reject({payload:"error"});
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "You email succesfully"});
                } else {
                    reject({ payload: errorMessage });
                }
            });
    })
}