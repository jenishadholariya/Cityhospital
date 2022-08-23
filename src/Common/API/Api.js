import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

export const signupApi = (data) => {
    console.log("signupApi", data);

    return new Promise((resolve,reject)=>{
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            onAuthStateChanged(auth,(user)=>{
                sendEmailVerification(auth.currentUser)
                .then(()=>{
                    console.log("check your email");

                })
                .catch((e)=>{
                    console.log(e);
                })
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorCode.localeCompare("auth/email-already-in-use")===0){
                console.log("email is already exist");
            }else{
                console.log(errorCode,errorMessage);
            }
            console.log(errorCode,errorMessage);
        });
    })
    
}