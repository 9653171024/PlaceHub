import { useEffect, useState } from "react";
import API from "../services/api";

function ResumeRequests() {

  const [resumes,setResumes] = useState([]);

  useEffect(()=>{
    fetchResumes();
  },[]);

  const fetchResumes = async () => {
    const res = await API.get("/resumes");
    setResumes(res.data);
  };

  return (
    <div>
      <h2>Resume Requests</h2>

      {resumes.map((r,index)=>(
        <div key={index} style={{margin:"10px 0"}}>
          <p>{r.studentEmail}</p>
          <p>{r.fileName}</p>
        </div>
      ))}

    </div>
  );
}

export default ResumeRequests;