import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Shared/hook/useTitle";

const AllToy = () => {
  useTitle('All Toy')
  const data = useLoaderData()
  console.log(data);
  const [toys,setToys] = useState(data)
  const [searchText,setSearchText] = useState('')
  const navigate = useNavigate()


  const handleSearch = () => {
    fetch(`https://toy-hero-server.vercel.app/getToyByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
      setSearchText('')
  };



  const handleViewDetails = id => {
      navigate(`/details/${id}`)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Toy details data loaded successfully",
        showConfirmButton: false,
        timer: 2500,
      });
  };



  return (
    <div className="overflow-x-scroll ">
      {/* search input field start here */}

      <div className="form-control">
  <div className="input-group  md:mt-10 md:mb-16">
    <input 
    onChange={(e) => setSearchText(e.target.value)}
     type="text" placeholder="Search by name" className="input input-bordered" />
    <button 
    onClick={handleSearch}
     className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

      {/* search input field start end */}
  <table className="mx-auto w-full table border-4">
    {/* head */}
    <thead>
      <tr >
        
        <th className="text-lg">Name</th>
        <th className="text-lg">Price</th>
        <th className="text-lg">Quantity</th>
        <th className="text-lg">----</th>
        <th className="text-lg">Seller</th>
        {/* <th className="text-lg"></th> */}
      </tr>
    </thead>
    <tbody className="w-96">
      {
        toys.map(toy =>{
          return <tr key={toy._id}>
          
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img className="w-1/3" src={toy.picture} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{toy.name}</div>
                <div className="text-sm opacity-50">{toy.subCategory}</div>
              </div>
            </div>
          </td>
          <td>
            {toy.price}
          </td>
          <td>
            {toy.available_quantity}
          </td>
          <td>
            <button 
            onClick={()=>handleViewDetails(toy._id)}
             className="btn btn-ghost btn-xs">
              details
              </button>
          </td>
          <td>
            {toy.postedBy? toy.postedBy: 'not available'}
          </td>
        </tr>
        })
      }
    </tbody>
    
  </table>
</div>
  );
};

export default AllToy;
