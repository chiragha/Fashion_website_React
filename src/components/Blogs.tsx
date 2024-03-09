import SectionTitle from "./SectionTitle";
import BlogCard from "./BlogCard";


const blogs = [
    {
        img: "/post_1.jpg",
        title: "Fashion Glam Show",
    },
    {
        img: "/post_2.jpg",
        title: "NEW YORK STYLE",
    },
    {
        img: "/post_3.jpg",
        title: "Fashion Glam Show",
    },
];

const Blogs = () => {
  return (
    <div className="container pt-[240px]">
        <SectionTitle topHeading="Latest News" mainHeading="FROM THE BEAUTY OF WORLD" subHeading="Check out some of the stand outs trends" />

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16">
            {blogs.map((blog) => (
                <BlogCard key={blog.title} img={blog.img} title={blog.title} />
            ))}
    </div>
    </div>
  )
}

export default Blogs