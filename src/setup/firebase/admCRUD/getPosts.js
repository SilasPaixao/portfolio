import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 

export const useGetPosts = (initialState)=>{
    const [posts, setPosts] = useState(initialState)
    
   
    const db = getFirestore(app);
    const postsCollectionRef = collection(db, 'posts')

    useEffect(()=>{
        
        const fetchPosts = async ()=>{
          try{
            const data = await getDocs(postsCollectionRef)
            setPosts(data.docs.map((doc)=>({...doc.data(), id: doc.id})))

          }catch(e){
            console.log('HOUVE ERROS NA POSTAGEM: ', e)
          }
        };

        fetchPosts();

    },[posts])
    
  return {posts}


}