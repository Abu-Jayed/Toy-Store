/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import UpdateToy from "../UpdateToy/UpdateToy";
import { Link } from "react-router-dom";
import useTitle from "../Shared/hook/useTitle";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const [grow,setGrow] = useState('yes')
  const handleGrow =(agree)=>{
    if(agree == true){
      setGrow('yes')
    }else{
      setGrow('no')
    }
    console.log(grow);
  }

  useEffect(() => {
    fetch(`https://toy-hero-server.vercel.app/myToys/${user?.email}?grow=${grow}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [grow]);

  /* delete code start here */
  const handleDelete = (id) => {

    /* swal confirmation start */

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )


        fetch(`https://toy-hero-server.vercel.app/toys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                  toast.success('Toy deleted successfully')
                    const remaining = toys.filter(toy => toy._id !== id);
                    setToys(remaining);
                }
            })
      }else{
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Your toy is not deleted yet!',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })

    /* swal confirmation end */




  };
  /* delete code end here */

  return (
    <div>
      <div className="">
        <h1 className="text-center p-4 "> All My Toy.</h1>
        <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="p-1"
            
          />{" "}
          <button className="btn btn-warning" onClick={()=>handleGrow(true)}>Decrese</button>
          <button className="btn btn-info" onClick={()=>handleGrow(false)}>Acces</button>
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
            {toys?.map((toy, i) => (
              <tr key={toy._id}>
                <td>{i + 1}</td>
                <td>{toy.name}</td>
                <td>{toy.category}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.available_quantity}</td>
                <td>{toy.rating}</td>
                <td>
                  <button>
                    <Link to={`/edit/${toy._id}`}>Edit</Link>
                  </button>
                </td>
                <td>
                  {" "}
                  <button 
                  onClick={()=>handleDelete(toy._id)}
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
      <Toaster></Toaster>
    </div>
  );
};

export default MyToys;
