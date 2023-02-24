import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const FindJobs = () => {

    const [job, setJob] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {
        const getData = async () => {
           var response = await axios.get('/api/jobs')
           setJob(response.data);
          }
         console.log(job);
        getData()
      }, [])

  return (
    <div>
      
      {<input type='text' placeholder="Search for jobs..." onChange={(event) => {
          setSearchTerm(event.target.value);
      }} />}
      {job.
      filter((data)=> {
        return (
          data.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
        
      )
      .map((data, i) => (
  <div className="lg:  my-5 mx-12 lg:items-center lg:justify-between" key={i}>
  <div className="min-w-0 flex-1">
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
      {data.title}
    </h2>
    <div className="mt-1 flex flex-col justify-between sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">

      <div className="mt-1 flex flex-col justify-between sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        {data.xitems[2]}
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        {data.company}
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        {data.salary}
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
        {data.xitems[3]}
      </div>
      </div>
      

      <span className="  sm:ml-3">
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Apply
      </button>
    </span>

    </div>
    
  </div>
</div>
)) }
    </div>
  )
}
