const Feature = () => {
  return (
    <div className="container pt-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <img src="/makeup.jpg" alt="makeup"></img>
            </div>

            <div>
                <h2 className="uppercase font-extrabold text-5xl">Makeup</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="bg-black h-[14px] w-[100px] mt-2 mb-4"></div>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ipsum alias quo quis at praesentium, asperiores eaque tenetur accusamus consequuntur debitis id, ex rem veniam eius distinctio facilis? Non, consequuntur.
                </p>

                <button className="text-gray-500 border border-black py-2 px-16 hover:bg-black hover:text-white">Explore</button>
            </div>

        </div>
    </div>
  )
}

export default Feature