import React from 'react'
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../config/firebase'
const InfoFrom = () => {
    const [name, setName] = React.useState('')
    const [email, seteEail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [education, setEducation] = React.useState('')
    const [exp, setExp] = React.useState('')
    const [domain, setDomain] = React.useState('')

const marketPlaceRef = collection(db, "usersfindjob");


    const handleClick = async () => {
        try {
          await addDoc(marketPlaceRef, {
            name: name,
            email: email,
            phone: phone,
            education: education,
            exp: exp,
            domain: domain,

          });
        
          console.log(name, email, phone, education, exp, domain)
        } catch (err) {
          console.error(err);
        }
      };

    
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Complete your Profile</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Tell us about yourself so that employers can find you.</p>

          <div className='my-4'>
              <input type="email" id="email" name="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
              placeholder="email" 
            onChange={(e) => seteEail(e.target.value)}
              
              required/>
          </div>
          <div className='my-4'>  
              <input
            onChange={(e) => setName(e.target.value)}
              
               type="text" id="name" name="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name" required/>
          </div>
          <div className='my-4'>  
              <input
            onChange={(e) => setPhone(e.target.value)}
              
              type="text" id="phone"  name="phone" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="phone number" required/>
          </div>
          <div className='my-4'>  
              <input
            onChange={(e) => setEducation(e.target.value)}
              
              type="text" id="education" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="education" required/>
          </div>
          <div className='my-4'>  
              <input
            onChange={(e) => setExp(e.target.value)}
              
              type="text" id="exp" name='exp' class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="experience" required/>
          </div>
          <div className='my-4'>  
              <input 
            onChange={(e) => setDomain(e.target.value)}
              
              type="text" id="domain" name='domain' class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="domain" required/>
          </div>    
      
  </div>
          <button
          onClick={handleClick}
          className="bg-blue-600 py-2 px-4 rounded-lg mt-20 hover:bg-blue-500 text-white"
        >
          Submit
        </button>
</section>
    </div>
  )
}

export default InfoFrom
