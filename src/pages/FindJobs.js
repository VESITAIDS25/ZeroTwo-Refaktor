import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

export const FindJobs = () => {

    const [job, setJob] = useState([]);

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

          {job.map((data, i)=> 
        (
          <div className="job-card" key={i}>
            <div className="job-d">
              <h1>Job Title: {data.title}</h1>
              <h3>Compant Name: {data.company}</h3>
              <p>Location: {data.address}</p>
            </div>
            <div className="job-s">
              <h1>{data.salary}</h1>
            </div>
          </div>
        )
       )}


    </div>
  )
}
