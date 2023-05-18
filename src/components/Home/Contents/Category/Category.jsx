import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
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
          <Tab>category 1</Tab>
          <Tab>category 2</Tab>
          <Tab>category 3</Tab>
        </TabList>

        <TabPanel>
            <div className="flex gap-4">
        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,h_720,c_pad/shop-us-prod/products/hyaonw0lvrsxa6dmf7gz_11148ed3-af67-48d0-9488-a88c6b2dc226.jpg?v=1663304168" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>

        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,h_720,c_pad/shop-us-prod/products/hyaonw0lvrsxa6dmf7gz_11148ed3-af67-48d0-9488-a88c6b2dc226.jpg?v=1663304168" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>
            </div>

        </TabPanel>

        
        <TabPanel>
        <div className="flex gap-4">
        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,h_720,c_pad/shop-us-prod/products/hyaonw0lvrsxa6dmf7gz_11148ed3-af67-48d0-9488-a88c6b2dc226.jpg?v=1663304168" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>

        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_540,h_540,c_pad/shop-us-prod/products/hubxu3gknhcaqdwmgofu.jpg?v=1682546472" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>
            </div>
        </TabPanel>
        <TabPanel>
        <div className="flex gap-4">
        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,h_720,c_pad/shop-us-prod/products/hyaonw0lvrsxa6dmf7gz_11148ed3-af67-48d0-9488-a88c6b2dc226.jpg?v=1663304168" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>

        <div>

            <img src="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_900,h_900,c_pad/shop-us-prod/products/wqbcdc3fcajed5phc41a_f4d138e1-bd16-45b3-98c7-5400cdc134f2.jpg?v=1674778964" alt="" className="w-48" />
            <p className="text-3xl">Villain Robot</p>
            <p>Price: $29</p>
            <p>Rating: ****</p>
            <button className="btn btn-warning">View Details</button>    
        </div>
            </div>
        </TabPanel>
      </Tabs>
        </TabPanel>
    {/* sub category 1 end */}


            {/* sub category 2 start */}

        <TabPanel>
        <Tabs>
        <TabList>
          <Tab>sub Category 4</Tab>
          <Tab>sub Category 5</Tab>
          <Tab>sub Category 6</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>

        
        <TabPanel>
          <h2>Any content 5</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 6</h2>
        </TabPanel>
      </Tabs>
        </TabPanel>
            {/* sub category 2 end */}


        
            {/* sub category 3 start */}

            <TabPanel>
        <Tabs>
        <TabList>
          <Tab>sub Category 7</Tab>
          <Tab>sub Category 8</Tab>
          <Tab>sub Category 9 </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 7</h2>
        </TabPanel>

        
        <TabPanel>
          <h2>Any content 8</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 9</h2>
        </TabPanel>
      </Tabs>
        </TabPanel>
            {/* sub category 3 end */}
      </Tabs>
    </div>
  );
};

export default Category;
