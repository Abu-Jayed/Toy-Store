import { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [marvel, setMarvel] = useState([]);

  const handleCheck = (type) => {
    fetch(`http://localhost:5000/allToy/Marvel/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [];
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
      [];
  };


/* DC Charector */
const handleHarryCharector = (type) => {
    fetch(`http://localhost:5000/allToy/Harry/${type}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("IT is working", data);
        setMarvel(data);
      }),
      [];
  };


/* view details */
const handleViewDetails = (id) =>{
    console.log(id);
}


  return (
    <div>
      <Tabs>
        <TabList>
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
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">
                         <Link to={`/details/${hero._id}`} >
                         View Details
                         </Link>
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
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
            <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
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
              <Tab onClick={()=>handleDCCharector('Hero')}>Hero</Tab>
              <Tab onClick={()=>handleDCCharector('Heroine')}>Heroine</Tab>
              <Tab onClick={()=>handleDCCharector('Villain')}>Villain</Tab>
            </TabList>

            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
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
              <Tab onClick={()=>handleHarryCharector('Hero')}>Hero</Tab>
              <Tab onClick={()=>handleHarryCharector('Heroine')} >Heroine</Tab>
              <Tab onClick={()=>handleHarryCharector('Villain')} >Villain</Tab>
            </TabList>

            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
                    </div>
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex gap-4">
                {marvel?.map((hero) => {
                  return (
                    <div key={hero._id}>
                      <img src={hero.picture} alt="" className="w-48" />
                      <p className="text-3xl">{hero.name}</p>
                      <p>{hero.price}</p>
                      <p>{hero.rating} </p>
                      <button className="btn btn-warning">View Details</button>
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
