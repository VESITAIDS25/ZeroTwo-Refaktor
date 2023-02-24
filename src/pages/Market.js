import React, {useState} from 'react'
import { Auth } from 'firebase/auth';
import { db, auth, storage } from '../config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const Market = () => {
const [inputs, setInputs] = useState('')
const [fileUpload, setFileUpload] = useState(null);
const [product, setProduct] = useState({
    'title': '',
})

const changeInfo = (e) => {
    setInputs((prev) => ({...prev , [e.target.name]: e.target.value }));
}

console.log(inputs)
const moviesCollectionRef = collection(db, "products");

const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, product);
      //uploadFile();
    //   getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

//   const uploadFile = async () => {
//     if (!fileUpload) return;
//     const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
//     try {
//       await uploadBytes(filesFolderRef, fileUpload);
//     } catch (err) {
//       console.error(err);
//     }
//   };

  return (
    <div className="">
        <input type="text" name="title" onChange={changeInfo} placeholder="title" />
        <button onSubmit={onSubmitMovie}>Submit</button>
    </div>
   
  )
}

export default Market
