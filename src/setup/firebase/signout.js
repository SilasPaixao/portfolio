import { getAuth, signOut } from "firebase/auth";
import { app } from "./firebaseConfig"

export const signout = ()=>{
    const auth = getAuth(app);

    signOut(auth).then(() => {
    // Sign-out successful.
    alert("deslogado")
   
    }).catch((error) => {
    // An error happened.
    alert("Erro ao ser deslogado")
    });
}
