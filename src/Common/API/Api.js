import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase"
import { GoogleAuthProvider } from "firebase/auth";


export const signupApi = (data) => {
    console.log("signupApi", data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
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
                if (user.emailVerified) {
                    resolve({ payload: user });
                    // console.log("Email or Password is Wrong");
                } else {
                    reject({ payload: "error" });
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);

                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "You email succesfully" });
                } else {
                    reject({ payload: errorMessage });
                }
            });
    })
}

export const logoutApi = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                resolve({ payload: "logout successfull" })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                reject(errorCode);
            })
    })
}

export const GoogleSignInAPI = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;

                resolve({payload:user})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

                reject({payload : error})
            });
    })
}