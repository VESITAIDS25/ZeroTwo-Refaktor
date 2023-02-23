import react, {useEffect, useState} from 'react'
import './App.css';
import axios from 'axios'

function App() {
  const [job, setJob] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(()=> {
    const getData = async () => {
       var response = await axios.get('api/jobs')
       setJob(response.data);
      }
 //     console.log(job);
    getData()
  }, [])

  // job.filter((data => (
  //   job.find(job.salary > 80000)
  // )))

  return (
    <div className="App">
      <div className="filter-section">
        <div className="f">
          <label htmlFor="f1">filter 1</label>
          <input type="checkbox" name="f1" id="f1"  />
        </div>
        
        <div className="f">
          <label htmlFor="f2">filter 2</label>
          <input type="checkbox" name="f2" id="f2"  />
        </div>  
        
        <div className="f">
          <label htmlFor="f3">filter 3</label>   
          <input type="checkbox" name="f3" id="f3"  />
        </div>
      </div>
      <div className="jobs">
      {job.map((e, i)=> 
        (
          <div className="job-card" key={i}>
            <div className="job-d">
              <h1>Job Title: {e.title}</h1>
              <h3>Compant Name: {e.company}</h3>
              <p>Location: {e.address}</p>
            </div>
            <div className="job-s">
              <h1>{e.salary}</h1>
            </div>
          </div>
        )
       )}
      </div>
    </div>
  );
}

export default App;
