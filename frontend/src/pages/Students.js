import React, { useEffect, useState } from "react";
import API from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students/all");
      setStudents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await API.delete(`/students/delete/${id}`);

      fetchStudents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Students List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.branch}</td>
              <td>{student.cgpa}</td>

              <td>
                <button onClick={() => deleteStudent(student._id)}>
                  Delete
                </button>

                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
