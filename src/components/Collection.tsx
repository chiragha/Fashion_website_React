import SectionTitle from "./SectionTitle";

const products = ["/pro_1.png", "/pro_2.png", "/pro_3.png", "/pro_4.png"];

const Collection = () => {
  return (
    <div className="container pt-[140px]">
        <SectionTitle topHeading="Our Products" mainHeading="from the new collection" subHeading="check out some of the stand out's from our collection" />

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(pro => (
            <div key={pro} className="flex flex-col justify-center items-center">
                <img className="mix-blend-color-burn" src={pro} alt="product" />
                <button className="mt-4 border border-black py-2 px-12 bg-black text-white hover:bg-transparent hove:text-black"> Add to Cart </button>
             </div>
            ))}
            </div>
        </div>
  );
};

export default Collection