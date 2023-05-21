import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Category = () => {
  const [marvel, setMarvel] = useState([]);
  const [change, setChange] = useState(true);
  const {user} = useContext(AuthContext)
  
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`https://toy-hero-server.vercel.app/allToy/Marvel/Hero`)
    .then(res => res.json())
    .then(data => {
      setMarvel(data)
    })
  },[])
  const handleLoadDefaultDc = () =>{

      fetch(`https://toy-hero-server.vercel.app/allToy/DC/Hero`)
      .then(res => res.json())
      .then(data => {
        setMarvel(data)
      })
  }
  const handleLoadDefaultMarvel =() =>{
    fetch(`https://toy-hero-server.vercel.app/allToy/Marvel/Hero`)
      .then(res => res.json())
      .then(data => {
        setMarvel(data)
      })
  }
  const handleLoadDefaultHarry = () =>{
    fetch(`https://toy-hero-server.vercel.app/allToy/Harry/Hero`)
      .then(res => res.json())
      .then(data => {
        setMarvel(data)
      })
  }

  const handleCheck = (type) => {
    fetch(`https://toy-hero-server.vercel.app/allToy/Marvel/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [change];
    console.log(type);
  };

  /* DC Charector */
  
  const handleDCCharector = (type) => {
    fetch(`https://toy-hero-server.vercel.app/allToy/DC/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [change];
  };

  /* DC Charector */
  const handleHarryCharector = (type) => {
    fetch(`https://toy-hero-server.vercel.app/allToy/Harry/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [change];
  };

  const handleSolveIssue = () => {
    console.log("changed successfully");
    setChange(!change);
  };

  const handleViewDetails = id => {
    if(!user){
      toast.error('You have to login first')
      
      setTimeout(()=>{
        navigate('/login') 
      },1500)


    }else{
      navigate(`/details/${id}`)
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Toy details data loaded successfully",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  return (
    <div data-aos="fade-up">
      <h1 className=" text-5xl font-bold bg-rose-200 hover:bg-rose-600 rounded-2xl mx-auto py-4 md:w-[700px] hover:text-white hover:rotate-2 ease-in duration-200 text-center mt-28 text-gray-800 mb-5">Shop By Category
      
      </h1>
      <Tabs>
        <TabList onClick={handleSolveIssue}>
          <Tab onClick={()=>handleLoadDefaultMarvel()}>Marvel</Tab>
          <Tab onClick={()=>handleLoadDefaultDc()}>DC</Tab>
          <Tab onClick={()=>handleLoadDefaultHarry()}>Harry Potter</Tab>
        </TabList>

        {/* sub category 1 start  */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab onClick={() => handleCheck("Hero")}>Hero</Tab>
              <Tab onClick={() => handleCheck("Heroine")}>Heroine</Tab>
              <Tab onClick={() => handleCheck("Villain")}>Villain</Tab>
            </TabList>

            <TabPanel>
              <div className=" md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className=" btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Detail
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className=" btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className=" btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* sub category 1 end */}

        {/* sub category 2 start */}

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab onClick={() => handleDCCharector("Hero")}>Hero</Tab>
              <Tab onClick={() => handleDCCharector("Heroine")}>Heroine</Tab>
              <Tab onClick={() => handleDCCharector("Villain")}>Villain</Tab>
            </TabList>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* sub category 2 end */}

        {/* sub category 3 start */}

        <TabPanel>
          <Tabs>
            <TabList>
              <Tab onClick={() => handleHarryCharector("Hero")}>Hero</Tab>
              <Tab onClick={() => handleHarryCharector("Heroine")}>Heroine</Tab>
              <Tab onClick={() => handleHarryCharector("Villain")}>Villain</Tab>
            </TabList>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white ">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="md:grid flex flex-col md:grid-cols-3 gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div
                      key={hero._id}
                      className="w-72 shadow-lg shadow-gray-700 p-5"
                    >
                      <img src={hero.picture} alt="" className="h-60 " />
                      <p className="text-3xl font-bold text-black">
                        {hero.name}
                      </p>
                      <div className="text-lg font-semibold flex gap-5">
                        <p>{hero.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p>{hero.rating} </p>
                        <div className="flex text-orange-400">
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarFill></BsStarFill>
                          <BsStarHalf></BsStarHalf>
                        </div>
                      </div>
                      <button onClick={()=>handleViewDetails(hero._id)} className="  btn btn-warning bg-rose-500 font-semibold hover:bg-rose-600 text-white">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
        {/* sub category 3 end */}
      </Tabs>
    </div>
  );
};

export default Category;
