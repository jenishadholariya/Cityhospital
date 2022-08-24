import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const signupApi = (data) => {
    console.log("signupApi", data);

    return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {    ;;
            const user = userCredential.user;
            onAuthStateChanged(auth,(user)=>{
                console.log(user);
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    resolve({payload:"check your email"});

                })
                .catch((e)=>{
                    reject({payload:e});
                })
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode.localeCompare("auth/email-already-in-use")==0){
                reject({payload:"this email is already exist"});
            }else{
                reject({payload:errorMessage});
            }
            // console.log(errorCode,errorMessage); 
        });
    })
    
}