import { useLoaderData } from "react-router-dom";
import Blogcard from "../../components/BlogCard/Blogcard";


const Blogs = () => {

    const blogs = useLoaderData()
    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-4">Recent blog posts</h1>
            <div className=" mx-8">
                {
                    blogs.map(blog => <Blogcard key={blog.id} blog={blog}></Blogcard>)
                }
            </div>
        </div>
    );
};

export default Blogs;