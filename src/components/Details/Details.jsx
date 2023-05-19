import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    const {picture,price,rating,subCategory,name,description,available_quantity} = data[0];
    console.log(name);
    console.log(data);
    return (
        <div>
            <p>hiiiiiiiii</p>
            <img src={picture} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Details;