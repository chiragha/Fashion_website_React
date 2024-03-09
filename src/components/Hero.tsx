const Hero = () => {
  return (
    <div className="bg-[url(./hero.jpg)] h-[calc(100vh-64px)] bg-cover bg-fixed bg-right sm:bg-top">
        <div className="container flex flex-col h-full justify-center text-white">
           <div>
            <p className="text-xl">Welcome</p>
            <h2 className="text-6xl uppercase font-bold">We Live Fashion</h2>
            <p className="text-xl ml-16 pt-2">
                Create Something Beautiful & timeless
            </p>

            <div className="h-[4px] w-16 bg-white my-4"></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br />
             Veniam ratione quidem id accusamus perferendis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
               <button className="border border-white px-16 py-2">View More</button>
               <button className="border border-white  bg-white text-black px-16 py-2">Buy Now</button>
            </div>
           </div>
        </div>     
    </div>
  )
}

export default Hero