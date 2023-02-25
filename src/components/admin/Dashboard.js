import React, {useState, useEffect} from 'react'
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';


const Dashboard = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const moviesCollectionRef = collection(db, "usersfindjob");

  const getData = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
     // console.log(filteredData)
      setUserInfo(filteredData);
      console.log(userInfo)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div class="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
  <div class="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
    <h6>Authors table</h6>

    <div class='max-w-md mx-auto shadow-lg border-solid my-10'>
    <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        onChange={(e)=> setSearchTerm(e.target.value)}
        placeholder="Search something.." /> 
    </div>
</div>

  </div>
  <div class="flex-auto px-0 pt-0 pb-2 mx-20">
    <div class="p-0 overflow-x-auto border-2 shadow-lg">
      <table class="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <thead class="align-bottom">
          <tr>
            <th class="mx-8 px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Name</th>
            <th class="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Contact</th>
            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Education</th>
            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Experience</th>
            <th class="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Domain</th>
            <th class="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
          </tr>
        </thead>
        <tbody>
          {
            userInfo.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.phone.toLowerCase().includes(searchTerm.toLowerCase()) || user.education.toLowerCase().includes(searchTerm.toLowerCase()) || user.exp.toLowerCase().includes(searchTerm.toLowerCase()) || user.domain.toLowerCase().includes(searchTerm.toLowerCase())

            ).map((user) => {
            return  <tr>
            <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div class="flex px-2 py-1">
                
                <div class="flex flex-col justify-center">
                  <h6 class="mb-0 leading-normal text-sm">{user.name}</h6>
                  <p class="mb-0 leading-tight text-xs text-slate-400">{user.email}</p>
                </div>
              </div>
            </td>
            <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p class="mb-0 font-semibold leading-tight text-xs">{user.phone}</p>
              
            </td>
            <td class="p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-3.6 text-xs rounded-1.8 py-2.2 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{user.education}</span>
            </td>
            <td class="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <span class="font-semibold leading-tight text-xs text-slate-400">{user.exp}</span>
            </td>
            <td class="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <a href="javascript:;" class="font-semibold leading-tight text-xs text-slate-400"> {user.domain} </a>
            </td>
          </tr>
            })
          }
          
         
        </tbody>
      </table>
    </div>
  </div>
</div>
 
    </div>
  )
}

export default Dashboard
