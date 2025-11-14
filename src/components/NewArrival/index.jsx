import React from "react";
import { NewArrivals } from "../../constant";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <div className="w-full px-36 mb-24">
        <div className="relative">
      <div className="flex items-center gap-4">
        <div className="h-12 bg-[#8a33fd] w-4 rounded-xl" />
        <h1 className="font-bold text-3xl">New Arrival</h1>
      </div>
      <div className="mx-8 mt-8 flex justify-between">
        {NewArrivals?.map((item, index) => (
          <div key={index}>
            <div className="bg-[#51fffc] p-8 rounded-2xl">
              <img
                className="h-64 w-64 rounded-2xl"
                src={item.src}
                alt="New Arrival"
              />
            </div>
            <h1 className="mt-4 ml-2 text-xl">{item.name}</h1>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:opacity-80">
        <FaArrowLeft size={18} />
      </div>
      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:opacity-80">
        <FaArrowRight size={18} />
      </div>
      </div>
    </div>
  );
};

export default Index;
