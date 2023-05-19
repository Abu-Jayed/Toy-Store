/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import "./MyJobs.css";
// import UpdateJobModal from "../UpdateJobModal/UpdateJobModal";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UpdateToy from "../UpdateToy/UpdateToy";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/myJobs/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, [user]);

  /* delete code start here */
  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = jobs.filter(job => job._id !== id);
                    setJobs(remaining);
                }
            })
    }
    console.log(id);
  };
  /* delete code end here */

  return (
    <div>
      <div className="my-jobs-container">
        <h1 className="text-center p-4 "> All My Toy.</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
          />{" "}
        </div>
        <table className="container">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Category</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {jobs?.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.name}</td>
                <td>{job.category}</td>
                <td>{job.subCategory}</td>
                <td>{job.price}</td>
                <td>{job.available_quantity}</td>
                <td>{job.rating}</td>
                <td>
                  <button>
                    <Link to={`/edit/${job._id}`}>Edit</Link>
                  </button>
                </td>
                <td>
                  {" "}
                  <button 
                  onClick={()=>handleDelete(job._id)}
                  >
                    Delete
                    </button>
                  {/* <UpdateToy></UpdateToy> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
