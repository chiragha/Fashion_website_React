interface PropsType {
  img:string ;
  title: string;
}

const BlogCard = ({img, title}: PropsType) => {
    return (
    <div className="space-y-4">
      <img src={img} alt={title} />
      <p className="text-gray-500 font-semibold">Feb 29 2024 by: Admin</p>
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-500">lorem jhgj hhg bjh jhgjhghj vjhgjhg jhgjh hjgg hjgjhgj
      jgjhb kbkjbkj kjgkjhkj jbjbkjmnbbb jkbkjhkl bkjbkj bkjbkj mnbkjh kjjh mnkh kjhkjh
      bjhbkj kjhkjh kjhnkj knlkj knkjk kjj mknk</p>
      <button className="border-b border-black font-semibold italic">Read More </button>

    </div>
    )
  }
  
  export default BlogCard