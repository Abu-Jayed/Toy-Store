import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Category = () => {
  const [marvel, setMarvel] = useState([]);
  const [change, setChange] = useState(true);
  const {user} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const handleCheck = (type) => {
    fetch(`http://localhost:5000/allToy/Marvel/${type}`)
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
    fetch(`http://localhost:5000/allToy/DC/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [change];
  };

  /* DC Charector */
  const handleHarryCharector = (type) => {
    fetch(`http://localhost:5000/allToy/Harry/${type}`)
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
    }
  }

  return (
    <div data-aos="fade-right">
      <Tabs>
        <TabList onClick={handleSolveIssue}>
          <Tab>Marvel</Tab>
          <Tab>DC</Tab>
          <Tab>Harry Potter</Tab>
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
              <div className=" md:flex flex flex-col md:flex-row gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Detail
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
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
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
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
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="md:flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
                        View Details
                      </button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-4">
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
                      <button onClick={()=>handleViewDetails(hero._id)} className="btn btn-warning">
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
