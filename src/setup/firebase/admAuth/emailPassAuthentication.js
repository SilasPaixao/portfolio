import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { goToAdmDashboard, goToAdmin } from "../../app-routes-manager/coordinator";
import { useNavigate } from "react-router-dom";

export const emailPassAuthentication = (user)=>{

    const navigate = useNavigate()

    const auth = getAuth(app);

    const register = ()=>{
        const {email, password} = user

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('Administrador cadastrado com sucesso!')
            goToAdmin(navigate)
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`ERROR: ${errorCode}`)
            
        });
        
        
    }

    const login = ()=>{

        const {email, password} = user

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            goToAdmDashboard(navigate)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`ERROR: ${errorCode}`)
            
        });
        
        
    }

    const [IsAdmlogged] = useState(auth.currentUser);

    const logout = ()=>{
        signOut(auth).then(() => {
            goToAdmin(navigate)
        }).catch((error) => {
            alert(error)
        });
    }

    
    return {register, login, IsAdmlogged, logout}
}