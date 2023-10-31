/* eslint-disable react/prop-types */

const Button = ({ children }) => {
  return (
    <div className="mb-4 mt-4 text-center cursor-pointer">
      <span className="text-[18px] transition-all duration-200 text-center px-[28px] py-[4px] border-2  border-red-600 rounded-3xl hover:bg-red-600 hover:text-white font-medium ">
        {children}
      </span>
    </div>
  );
};

export default Button;
