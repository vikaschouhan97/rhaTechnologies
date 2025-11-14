import { FeaturedProducts } from "../../constant";

const Index = () => {
  return (
    <div className="w-full flex justify-between px-36 mb-24 gap-8">
      {FeaturedProducts.map((item, index) => (
        <section
          className={`flex featured-cards mt-12 w-[50%] ${
            index % 2 === 0 ? "bg-[#feca65]" : "bg-[#7c5895]"
          } h-96 rounded-2xl`}
          key={index}
        >
          <div className="w-[50%] flex justify-center items-start pl-12 flex-col text-white">
            <h3 className="font-bold mb-4 text-xl">{item.featureName}</h3>
            <h1 className="text-5xl font-bold">{item.title}</h1>
            <h3 className="mt-4 text-xl">{item.discount}</h3>
            <div className="mt-6 underline cursor-pointer text-xl">Expore Items</div>
          </div>
          <div className="h-auto mr-12 w-[65%] flex justify-center items-center py-4">
            <img
              src={item.src}
              alt=""
              className="object-contain h-full w-auto"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Index;
