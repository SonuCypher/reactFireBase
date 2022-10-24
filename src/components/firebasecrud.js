import React from 'react'
import { Firebase } from '../firebase/config'
import 'firebase/compat/firestore'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
function Firebasecrud() {
    const auth = getAuth()
    return (
        <div>
            <button onClick={()=>{
                Firebase.firestore().collection('products').get().then((snap)=>{
                  console.log(snap)
                  snap.forEach(element => {
                    console.log(element.data())
                  });
               })
                // createUserWithEmailAndPassword(auth, 'sonu@gmail.com', '123456')
                // .then((userCredential) => {
                //   // Signed in 
                //   const user = userCredential.user;
                //   // ...
                // })
                // .catch((error) => {
                //   const errorCode = error.code;
                //   const errorMessage = error.message;
                //   // ..
                // });



                 
            }}>Click me</button>
        </div>
    )
}

export default Firebasecrud
