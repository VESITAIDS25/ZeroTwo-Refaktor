import React, {useEffect, useState} from 'react'
import SearchBar from '../components/SearchBar';
import { db, auth, storage } from '../config/firebase';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const Market = () => {
  const inputtextbox =
 "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const [inputs, setInputs] = useState('')
const [fileUpload, setFileUpload] = useState(null);
const [title, setTitle] = useState("")
const [details, setDetails] = useState("")
const [desc, setDesc] = useState("")
const [price, setPrice] = useState("")
const [url, setUrl] = useState("")



const changeInfo = (e) => {
    setInputs((prev) => ({...prev , [e.target.name]: e.target.value }));
}

useEffect(()=> {
  listAll(ref(storage, `projectFiles/${auth?.currentUser?.uid}/`)).then((res) => {
    res.items.forEach((item)=> {
      getDownloadURL(item).then((url) => {
        console.log(url)
        setUrl(url)
      })
    })
  })
})

console.log(inputs)
const marketPlaceRef = collection(db, "products");

const onSubmitMovie = async () => {
    try {
      await addDoc(marketPlaceRef, {
        'title': title,
        'desc': desc,
        'details': details,
        'price': price,
        'user': auth?.currentUser?.uid,
        'image': url,
        'createdAt': new Date().toISOString(),
      });
     uploadFile()
    } catch (err) {
      console.error(err);
    }
  };

 

  const uploadFile = async () => {
    if (!fileUpload) return;
    const filesFolderRef = ref(storage, `projectFiles/${auth?.currentUser?.uid}/image`);
    try {
      await uploadBytes(filesFolderRef, fileUpload)
    }
        catch (err) {
      console.error(err);
    }
  };

  


  return (
    <div className="flex justify-center">
    {
      <div className="flex-row w-1/2">
        <div className="flex-1 my-8">
          {/* <label>Title: </label> */}
          <input
            type="text"
            name="title"
            className={inputtextbox}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div className="flex-1 my-8">
          {/* <label>Description: </label> */}
          <input
            type="text"
            name="desc"
            onChange={(e) => setDesc(e.target.value)}
            className={inputtextbox}
            placeholder="description"
          />
        </div>

        <div className="flex-1 my-8">
        
          <input
            type="text"
            name="details"
            onChange={(e) => setDetails(e.target.value)}
            className={inputtextbox}
            placeholder="details"
          />
        </div>
        <div className="flex-1 my-8">
          {/* <label>File: </label> */}
          <input
            type="file"
            className={inputtextbox}
            onChange={(e) => setFileUpload(e.target.files[0])}
          />
        </div>

        <div className="flex-1 Smy-8">
          {/* <label>Price: </label> */}
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            className={inputtextbox}
            placeholder="price"
          />
        </div>

        
      </div>
    }
  </div>
  )
}

export default Market
