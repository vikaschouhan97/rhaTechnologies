import "./index.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <section className="hero-section relative">
      <div className="left-section">
        <div className="hero-content">
          <h3 className="sub-heading">T-Shirt / Tops</h3>
          <h1 className="hero-title line-clamp-2">Summer <br /> Value Pack</h1>
          <h3 className="sub-heading">cool / colorful / comfy</h3>
        </div>
        <div className="">
        <button className="shop-button mt-12 bg-white text-black rounded-md font-bold cursor-pointer w-[188px] p-4 hover:opacity-80">Shop Now</button>
        </div>
      </div>
      <div className="right-section">
            <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png" alt="" />
        </div>
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:opacity-80">
            <FaArrowLeft size={44} />
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 p-3 rounded-full cursor-pointer hover:opacity-80">
            <FaArrowRight size={44} />
        </div>
    </section>
  );
};

export default Index;
