import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../Shared/hook/useTitle";

const AllToy = () => {
  useTitle('All Toy')
  const data = useLoaderData()
  console.log(data);
  const [toys,setToys] = useState(data)
  const [searchText,setSearchText] = useState('')

  const handleSearch = () => {
    fetch(`http://localhost:5000/getToyByName/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  };


  return (
    <div className="overflow-x-auto w-full">
      {/* search input field start here */}

      <div className="form-control">
  <div className="input-group">
    <input 
    onChange={(e) => setSearchText(e.target.value)}
     type="text" placeholder="Search…" className="input input-bordered" />
    <button 
    onClick={handleSearch}
     className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>

      {/* search input field start end */}
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        toys.map(toy =>{
          return <tr key={toy._id}>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
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
            <br/>
            <span className="badge badge-ghost badge-sm">{toy.available_quantity} available</span>
          </td>
          <th>
            <button className="btn btn-ghost btn-xs">
              <Link to={`/details/${toy._id}`}>
              details
              </Link>
              </button>
          </th>
        </tr>
        })
      }
    </tbody>
    
  </table>
</div>
  );
};

export default AllToy;
