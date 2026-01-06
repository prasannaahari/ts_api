import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
  id: string | number;
  title: string;
  body: string;
};

function ParamsAlone() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchFnParams = async () => {
      if (!id) return;
      const res = await axios.get<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(res.data);
    };
    fetchFnParams();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container border p-4">
      <h1 className="text-xl font-bold">{post.title}</h1>
      <hr className="my-2" />
      <p>{post.body}</p>
    </div>
  );
}

export default ParamsAlone;
