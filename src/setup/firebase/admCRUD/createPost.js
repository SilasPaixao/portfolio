import { app } from "../firebaseConfig"
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { articlesBg, projectsBg } from "../../../constants/backgrounds";


export const createPost = async (post, proj)=>{
 

    const db = getFirestore(app);

    if(proj){
        try {
            const docRef = await addDoc(collection(db, "posts"), {
              title: post.projTitle,
              description: post.projMsgBody,
              link: post.projLink,
              image: `${projectsBg}`,
              project:true
              
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }else{
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title: post.articleTitle,
                description: post.articleMsgBody,
                link: post.articleLink,
                image: `${articlesBg}`,
                article:true
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }



}