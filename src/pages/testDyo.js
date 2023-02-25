import React from 'react';
import { useHistory } from 'react-router-dom';


function CareerResources() {
    // const history = useHistory();
  
    const handleResumeClick = () => {
    //   history.push('/resume-tips');
    };
  return (
    <div>
      <h1>Career Resources</h1>
      <ol>
        <li>
          {/* <h2 onClick ={handleResumeClick}>Resume and Cover Letter Writing</h2> */}
          <p>Resume and cover letter writing are essential skills for job seekers. A resume provides a summary of your work experience, skills, and education, while a cover letter highlights your interest in a specific job and explains how your skills and experience make you a strong candidate. Well-crafted resumes and cover letters can increase your chances of getting hired.</p>
        </li>
        <li>
          <h2>Interview Preparation</h2>
          <p>Interview preparation involves researching the company, practicing common interview questions, and preparing responses to specific job-related questions. It's important to dress professionally, arrive on time, and bring copies of your resume and any other relevant materials. Good preparation can help you feel confident and make a positive impression on the interviewer.</p>
        </li>
        <li>
          <h2>Career Planning and Exploration</h2>
          <p>Career planning and exploration involves identifying and setting career goals, assessing one's skills and interests, and researching career options. This process can help individuals make informed decisions about their career path, and can include activities such as informational interviews, job shadowing, and skill development to help achieve those goals.</p>
        </li>
        <li>
          <h2>Skill Development</h2>
          <p>Skill development is the process of acquiring or improving the skills and knowledge needed to perform a specific job or task. It involves identifying one's existing skills, setting goals for skill development, finding resources to help develop new skills, practicing regularly, seeking feedback, and staying open to learning and new experiences. Skill development is a lifelong process that helps individuals stay relevant and competitive in their career or industry.</p>
        </li>
        <li>
          <h2>Job Search Strategies</h2>
          <p>Job search strategies involve identifying job criteria, using job search websites, networking with professionals, customizing job applications, using social media, attending job fairs, volunteering or interning, working with recruiters, and being persistent in the job search. It's important to stay focused on goals and keep applying until the right opportunity is found.</p>
        </li>
      </ol>
    </div>
  );
}

export default CareerResources;

// export default testDyo
